const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
