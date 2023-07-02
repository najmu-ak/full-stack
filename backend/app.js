const express = require('express');
const cors = require('cors');
const app = express();

const usersRouter = require('./users');

// Middleware to parse request bodies
app.use(express.json());
app.use(cors())

// Mount the users router
app.use('/users', usersRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


















// Route for the homepage
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });
  
//   // Route for /users
//   app.get('/users', (req, res) => {
//     res.send('Users page');
//   });
  
//   // Route for /users/:id
//   app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
//   });
  
//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
//   });