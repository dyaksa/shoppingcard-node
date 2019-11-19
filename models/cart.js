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
                console.log(existingProductIndex);
                console.log(cart);
            } else {
                updateProduct = {
                    id: id,
                    qty: 1
                };
                cart.products = [...cart.products, updateProduct];
                console.log(cart);
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
}