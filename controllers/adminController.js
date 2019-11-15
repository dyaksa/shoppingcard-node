const products = [];
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        pageTitle: "Home Page Shop"
    })
}

exports.postProduct = (req, res, next) => {
    let title = req.body.title;
    let imageUrl = req.body.imageUrl;
    let price = req.body.price;
    let desc = req.body.desc;

    const products = new Product(title, imageUrl, price, desc);
    products.save();
    res.redirect("/");
}

exports.getProduct = (req, res, next) => {
    const products = Product.fetchAll((product) => {
        res.render("admin/products", {
            pageTitle: "Home Page Shop",
            products: product
        })
    });

}