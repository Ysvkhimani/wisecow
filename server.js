const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Yashvi khimani!');
});

app.get('/about', (req, res) => {
  res.send('This is Yashvi Khimani. I’m passionate about DevOps and learning new tech!');
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
