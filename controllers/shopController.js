const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-lists", {
            products: products,
            pageTitle: "Home Page"
        })
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/index", {
            products: products,
            pageTitle: "Home Page"
        })
    });
}

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "Your Cart"
    });
}

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout"
    })
}