const fs = require("fs");
const path = require("path");
const root = require("../utils/path");
const random = require("../utils/random");

const Cart = require("../models/cart");

const p = path.join(root, "data", "product.json");
const getProductFromFile = (cb) => {
    fs.readFile(p, (err, products) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(products));
        }
    });
}

module.exports = class Product {
    constructor(id, title, imageUrl, price, desc) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.desc = desc;
    }

    static deleteById(id) {
        getProductFromFile((products) => {
            const product = products.find(p => p.id === id);
            const updateProduct = products.filter(p => p.id !== id);
            fs.writeFile(p, JSON.stringify(updateProduct), err => {
                if (!err) {
                    Cart.deleteById(id, product.price);
                }
            });
        });
    }

    save() {
        getProductFromFile((products) => {
            if (this.id) {
                const existingIndex = products.findIndex(p => p.id === this.id);
                const updateProducts = [...products];
                updateProducts[existingIndex] = this;
                fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
                    console.log(err);
                });
            } else {
                this.id = random.id();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                })
            }
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }

    static findById(id, cb) {
        getProductFromFile((products) => {
            const product = products.find(prod => prod.id === id);
            cb(product);
        })
    }
}