const fs = require("fs");
const path = require("path");
const root = require("../utils/path");
const random = require("../utils/random");

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
    constructor(title, imageUrl, price, desc) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.desc = desc;
    }

    save() {
        this.id = random.id();
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
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