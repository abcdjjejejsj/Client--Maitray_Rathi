const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Hardcoded "case law" data
const CASES = [
  {
    id: 1,
    title: "State v. X - On Bail",
    citation: "CRL. A. No. 123/2019",
    content: "This case discusses bail in the context of ...",
    keywords: ["bail","custody","police"]
  },
  {
    id: 2,
    title: "Y v. State - FIR Validity",
    citation: "CIV. P. 45/2018",
    content: "This case examines FIR registration and ...",
    keywords: ["FIR","investigation","registration"]
  },
  {
    id: 3,
    title: "Z v. Authority - Custody Appeal",
    citation: "CRL. AP. 78/2020",
    content: "Court considered custody duration and ...",
    keywords: ["custody","detention","remand"]
  },
  {
    id: 4,
    title: "Alpha v. Beta - Contract Dispute",
    citation: "CIV. 11/2017",
    content: "A contract interpretation matter ...",
    keywords: ["contract","dispute","agreement"]
  }
];

// Simple search endpoint: /api/search?q=<term>
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').trim().toLowerCase();
  if (!q) {
    // return empty array when no query rather than error
    return res.json({ results: [] });
  }

  // naive matching: if q appears in keywords or title/content
  const results = CASES.filter(c => {
    if (c.keywords.some(k => k.toLowerCase().includes(q))) return true;
    if (c.title.toLowerCase().includes(q)) return true;
    if (c.content.toLowerCase().includes(q)) return true;
    return false;
  }).slice(0, 10).map(c => ({
    id: c.id,
    title: c.title,
    citation: c.citation,
    snippet: c.content.substring(0, 140) + (c.content.length > 140 ? '...' : '')
  }));

  // simulate small network delay (optional)
  setTimeout(() => {
    res.json({ results });
  }, 400); // 400ms delay to show loading
});

app.listen(port, () => {
  console.log(`Case Law API listening at http://localhost:${port}`);
});
