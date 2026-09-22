const express = require('express');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env if present
try {
  if (process.loadEnvFile) {
    process.loadEnvFile();
  } else {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
      const lines = fs.readFileSync(envPath, 'utf8').split('\n');
      for (const line of lines) {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let val = match[2] || '';
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          process.env[key] = val.trim();
        }
      }
    }
  }
} catch (e) {
  // Silent fallback
}

const app = express();
const PORT = process.env.PORT || 3000;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'surajvadhya62@gmail.com';

// Body parsers for suggestion form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint for Render monitoring
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Secure API endpoint for visitor suggestions (Keeps recipient email 100% private)
app.post('/api/suggest-pathway', async (req, res) => {
  try {
    const { institute, title, authority, category, description, sourceUrl, submitterName, submitterEmail } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, error: 'Title and description are required.' });
    }

    const suggestionRecord = {
      id: 'sug_' + Date.now(),
      timestamp: new Date().toISOString(),
      institute: String(institute || 'icai').toLowerCase(),
      title: String(title).slice(0, 150),
      authority: String(authority || 'Not Specified').slice(0, 150),
      category: String(category || 'general').slice(0, 50),
      description: String(description).slice(0, 2000),
      sourceUrl: String(sourceUrl || '').slice(0, 300),
      submitterName: String(submitterName || 'Anonymous Member').slice(0, 100),
      submitterEmail: String(submitterEmail || 'Not Provided').slice(0, 100),
      status: 'pending'
    };

    // 1. Persist to data/suggestions.json
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const suggestionsFile = path.join(dataDir, 'suggestions.json');
    let existing = [];
    if (fs.existsSync(suggestionsFile)) {
      try {
        existing = JSON.parse(fs.readFileSync(suggestionsFile, 'utf8'));
      } catch (_) {
        existing = [];
      }
    }
    existing.unshift(suggestionRecord);
    fs.writeFileSync(suggestionsFile, JSON.stringify(existing, null, 2), 'utf8');

    // 2. Relay to FormSubmit securely in the background (server-side only)
    if (RECIPIENT_EMAIL) {
      try {
        const formSubmitPayload = {
          _subject: `[${suggestionRecord.institute.toUpperCase()}] New Pathway Suggestion: ${suggestionRecord.title}`,
          _template: 'table',
          _captcha: 'false',
          'Target Institute': suggestionRecord.institute.toUpperCase(),
          'Pathway Title': suggestionRecord.title,
          'Authority / Governing Body': suggestionRecord.authority,
          'Category': suggestionRecord.category,
          'Key Benefits / Details': suggestionRecord.description,
          'Official Source / URL': suggestionRecord.sourceUrl || 'N/A',
          'Submitted By': `${suggestionRecord.submitterName} (${suggestionRecord.submitterEmail})`,
          'Timestamp': suggestionRecord.timestamp
        };

        // Fire and catch background fetch so client response is not delayed
        fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formSubmitPayload)
        }).then(r => r.json()).then(resp => {
          console.log('[FormSubmit Relay]', resp);
        }).catch(err => {
          console.warn('[FormSubmit Relay Warning]', err.message);
        });
      } catch (err) {
        console.warn('[Relay Error]', err.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your suggestion has been successfully submitted and logged.'
    });

  } catch (error) {
    console.error('Error handling suggestion:', error);
    return res.status(500).json({ success: false, error: 'Failed to process suggestion. Please try again later.' });
  }
});

// Static assets (zero cache in development, 1h in production)
const isProd = process.env.NODE_ENV === 'production';
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: isProd ? '1h' : 0,
  etag: false
}));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ICAI Career Advantage Map running on port ${PORT}`);
});
