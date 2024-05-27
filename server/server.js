const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching products' });
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

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
