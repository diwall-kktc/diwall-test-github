const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});
let ads = []; // آرایه‌ای برای ذخیره موقّت آگهی‌ها در حافظه

app.post('/ads', (req, res) => {
  const ad = req.body;

  if (!ad.title || !ad.description) {
    return res.status(400).json({ error: 'title and description are required' });
  }

  ads.push(ad);
  res.status(201).json({ message: 'Ad created', ad });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
