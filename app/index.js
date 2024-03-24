const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});