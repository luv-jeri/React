const express = require('express');
const cors = require('cors');
const origin = ['http://localhost:3000', 'http://localhost:5173'];
const axios = require('axios');

const app = express();

app.use(
  cors({
    origin,
  })
);
app.get('/', async (req, res) => {
  const { data } = await axios.get('https://stackoverflow.com/users/12042898/ged-flod');
  console.log(data);
  res.send(data);
});

app.listen('5000', () => {
  console.log('Server is running on port 5000');
});
