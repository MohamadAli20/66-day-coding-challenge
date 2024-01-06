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
// See the output here: http://localhost:3000/json
// Output: {"message":"HELLO WORLD"}

// Root-Level Request Logger Middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });
// Output is displayed in the console
// Output: GET /json - ::1

// Chain Middleware
// app.get("/now", function(req, res, next){
//   req.time = new Date().toString();
//   next();
// },function(req, res, next){
//   res.send({time: req.time});
// });
// See the output here: http://localhost:3000/now
// Output: {"time":"Thu Jan 04 2024 23:06:22 GMT+0800 (Taipei Standard Time)"}

// DAY 42
// Define the route for /:word/echo
app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
