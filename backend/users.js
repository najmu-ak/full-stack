const express = require('express');
const pool = require('./db');
const router = express.Router();

// Route for user signup
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Check if the user already exists in the database
  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error querying users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length > 0) {
      res.status(409).send('User already exists,try new email');
      return;
    }
    // Insert the new user into the database
    const newUser = { name, email, password };
    pool.query('INSERT INTO users SET ?', newUser, (err) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send('User signup successful');
    });
  });
});


// Route for user login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Check if the user exists in the database
  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length === 0) {
      res.status(401).send('Invalid email or password');
      return;
    }
    const user = results[0];
    // Check if the password matches
    if (user.password !== password) {
      res.status(401).send('Invalid email or password');
      return;
    }
    res.send('User page successful');
  });
  // -----------------------------------------------

});

router.get('/list', (req, res) => {
  // Check if the user exists in the database
  pool.query('SELECT * FROM users', (err, results) => {
    res.send(results);
  });
});

module.exports = router;