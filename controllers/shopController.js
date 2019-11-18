const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-lists", {
            products: products,
            pageTitle: "Home Page"
        })
    });
}

exports.getProductId = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id, (product) => {
        res.render("shop/product-details", {
            pageTitle: product.title,
            product: product
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/index", {
            products: products,
            pageTitle: "Home Page"
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "Your Cart"
    });
}

exports.postCart = (req, res, next) => {
    const id = req.body.productId;
    console.log(id);
    res.redirect("/cart");
}

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        pageTitle: "Your Orders"
    })
}

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout"
    })
}