// const products = [];
const fs = require("fs");
const path = require("path");
const root = require("../utils/path");

module.exports = class Product {
    constructor(title, imageUrl, price, desc) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.desc = desc;
    }

    save() {
        const p = path.join(root, "data", "product.json");
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(root, "data", "product.json");
        fs.readFile(p, (err, product) => {
            if (err) {
                cb([]);
            } else {
                cb(JSON.parse(product));
            }
        });
    }
}