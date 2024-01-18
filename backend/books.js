const express = require('express');
const pool = require('./db');
const router = express.Router();



router.get('/booklist', (req, res) => {
  // Check if the user exists in the database
  pool.query('SELECT * FROM booklist', (err, results) => {
    res.send(results);
  });
});


  
router.post('/addnew', (req, res) => {
  const { Bookname, Authorname, Price, Image } = req.body;
  const addnew = { Bookname, Authorname, Price, Image };

  pool.query('INSERT INTO booklist SET ?', addnew, (err) => {

    res.send('New book added');
  });
});

module.exports = router;