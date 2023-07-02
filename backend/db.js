const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'school'
});

// Export the pool for reusability
module.exports = pool;