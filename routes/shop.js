const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res) => {
  const [products] = [adminData.products];
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
  });
});

module.exports = router;
