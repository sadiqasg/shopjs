const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
    path: '/',
  });
};
