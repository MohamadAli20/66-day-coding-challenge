require('dotenv').config(); // Load and configure dotenv to read environment variables from a .env file
const express = require('express');
const app = express();

// Set the application's port by using the PORT environment variable if available,
// otherwise default to port 3000
const PORT = process.env.PORT || 3000;

// Express.js Route Handling for '/json' with Message Style Configuration
// app.get('/json', function(req, res) {
//   let responseObj = { "message": "Hello World" };  // Initialize with the default message
//
//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     responseObj.message = "Hello World".toUpperCase();
//   }
//
//   res.json(responseObj);
// });

// Root-Level Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
