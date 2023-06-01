const Product = require('../models/product');
const cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fielddata])=>{
       res.render("shop/product-list", {
         prods: rows,
         pageTitle: "All Products",
         path: "/products",
       });
  })
  .catch(err => console.log(err))
 
};

exports.getproduct = (req,res,next) => {  
  let prodid = req.params.productId;
  Product.findbyid(prodid)
  .then(([product])=>{
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product.title,
        path: "/products",
      });
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fielddata]) => {
    res.render("shop/index", {
      prods: rows,
      pageTitle: "Shop",
      path: "/",
    });
    console.log(fielddata);
  })
  .catch(err=>console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req,res,next) => {
  const prodid = req.body.productId;
  Product.findbyid(prodid,(product)=>{
    cart.addProduct(prodid,product.price);
  });
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
