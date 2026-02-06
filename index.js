const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/mpesa/callback', (req, res) => {
  console.log('M-Pesa callback received:', req.body);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
