const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// POST endpoint to handle the SIM800 requests
app.post('/api', (req, res) => {
  // Extract the data sent by the SIM800 module
  const { voltage1, voltage2, current1, current2 } = req.body;

  // Print the received data
  console.log('Received data:');
  console.log('Voltage 1:', voltage1);
  console.log('Voltage 2:', voltage2);
  console.log('Current 1:', current1);
  console.log('Current 2:', current2);

  // You can perform any desired processing with the received data here

  res.send('OK'); // Send a response back to the SIM800 module
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
