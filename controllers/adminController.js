const products = [];
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Home Page Shop"
    })
}

exports.postProduct = (req, res, next) => {
    const products = new Product(req.body.title);
    products.save();
    res.redirect("/");
}

exports.getProduct = (req, res, next) => {
    const products = Product.fetchAll();
    res.render("shop", {
        pageTitle: "Home Page Shop",
        products: products
    })
}