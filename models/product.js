// const products = [];
const fs = require("fs");
const path = require("path");
const root = require("../utils/path");

module.exports = class Product {
    constructor(title) {
        this.title = title;
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

    static fetchAll() {
        return products;
    }
}