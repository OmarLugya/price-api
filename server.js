const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/price', (req, res) => {
  res.json({ price: 1.00 });
});

app.listen(PORT, () => {
  console.log(`Price API running on port ${PORT}`);
});