const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Endpoint to get your name
app.get('/user', (req, res) => {
  res.json({ name: 'Your Name' }); // Replace 'Your Name' with the desired name
});

// Endpoint to get the container ID
app.get('/container-id', (req, res) => {
  const containerId = os.hostname();
  res.json({ containerId });
});

app.listen(port, () => {
  console.log(`Node.js service is running at http://localhost:${port}`);
});
