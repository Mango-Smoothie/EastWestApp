require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected to MySQL as id ' + connection.threadId);
  });

// Express routes
app.get('/', (req, res) => {
  res.send('Hello, JavaScript!');
});

app.get('/data', (req, res, next) => {
    connection.query('SELECT * FROM your_table LIMIT 15', (err, results) => {
      if (err) {
        return next(err);
      }
      res.json(results);
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! We are on it.');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });