const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        pageTitle: "Home Page Shop"
    })
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    //jika url localhost:3000/admin/edit-product/:id?edit=true
    if (!editMode) {
        return res.redirect("/");
    }
    const id = req.params.productId;
    Product.findById(id, (product) => {
        if (!product) {
            return res.redirect("/");
        }
        console.log(product);
        res.render("admin/add-product", {
            pageTitle: "Edit Product",
            editing: editMode,
            product: product
        });
    });
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