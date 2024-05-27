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

// Route to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM product WHERE productID = ?', [productId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching product' });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(result[0]);
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

// add product
app.post("/api/addProduct", (req, res) => {
  const productName = req.body.sending.productName;
  const imageLink = req.body.sending.imageLink;
  const price = req.body.sending.price;
  const description = req.body.sending.description;
  const size = req.body.sending.size;
  const material = req.body.sending.material;
  db.query(
    `
    INSERT INTO product (productID, productName, imageLink, price, description, size, material)
    VALUES (NULL, ?, ?, ?, ?, ?, ?);
    `,
    [productName, imageLink, price, description, size, material],
    (err, result) => {
      if (err) {
        console.log(
          err + "send add product error" + productName + imageLink + price + description + size + material
        );
      } else {
        res.send(result);
      }
    }
  );
});

const PORT = 3306;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




