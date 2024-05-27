const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12709675",
  password: "B58auKQ7He",
  database: "sql12709675"
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM product', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching products' });
    }
    res.json(results);
  });
});

// Login
app.get('/api/login', (req, res) => {
  db.query('SELECT * FROM account', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching account' });
    }
    res.json(results);
  });
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching product details' });
    }
    res.json(result[0]);
  });
});

app.post('/api/products', (req, res) => {
  const { name, description, size, material, price, image } = req.body;
  const query = 'INSERT INTO products (name, description, size, material, price, image) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, description, size, material, price, image], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding product' });
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});


const PORT = 3306;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



