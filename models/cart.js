const fs = require("fs");
const path = require("path");
const root = require("../utils/path");

const p = path.join(root, "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0
            };
            if (!err) {
                cart = JSON.parse(fileContent); //=> {"products":[{"id":"r3jewctyvm00tvjg","qty":1}],"totalPrice":80000}
            }
            //analisis cart => find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id); //nomer index
            const existingProduct = cart.products[existingProductIndex]; //cart.producst[0] = {"id":"r3jewctyvm00tvjg","qty":1}
            let updateProduct;

            //add new product
            if (existingProduct) {
                updateProduct = {
                    ...existingProduct
                }; //=> updateProduct = {"id":"r3jewctyvm00tvjg","qty":1}
                updateProduct.qty = updateProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            } else {
                updateProduct = {
                    id: id,
                    qty: 1
                };
                cart.products = [...cart.products, updateProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }

    static deleteById(id, productPrice) {
        fs.readFile(p, (err, carts) => {
            if (err) {
                return;
            }
            const updateCart = {
                ...JSON.parse(carts)
            };
            const product = updateCart.products.find(p => p.id === id);
            const productQty = product.qty;
            updateCart.products = updateCart.products.filter(p => p.id !== id);
            updateCart.totalPrice = updateCart.totalPrice - (productPrice * productQty);
            fs.writeFile(p, JSON.stringify(updateCart), err => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }

    static fetchCart(cb) {
        fs.readFile(p, (err, carts) => {
            if (err) {
                cb(null);
            } else {
                cb(JSON.parse(carts));
            }
        });
    }
}