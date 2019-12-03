// const Product = require("../models/product");
const Cart = require("../models/cart");
const Product = require("../models/productDB");

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
        console.log(product);
        res.render("shop/product-details", {
            pageTitle: product.title,
            product: product
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render("shop/index", {
                products: rows,
                pageTitle: "Home Page"
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getCart = (req, res, next) => {
    Cart.fetchCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProduct = cart.products.find(prod => prod.id === product.id);
                if (cartProduct) {
                    cartProducts.push({
                        productData: product,
                        qty: cartProduct.qty
                    });
                }
            };
            res.render("shop/cart", {
                pageTitle: "Your Cart",
                products: cartProducts
            });
        });
    });

}

exports.postCart = (req, res, next) => {
    const id = req.body.productId;
    Product.findById(id, (product) => {
        Cart.addProduct(id, product.price);
    });
    res.redirect("/cart");
}

exports.getOrders = (req, res, next) => {

    res.render("shop/orders", {
        pageTitle: "Your Orders",
    })
}

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout"
    })
}

exports.postDeleteCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.deleteById(prodId, product.price);
        res.redirect("/cart");
    });
}