const db = require("../utils/database");

module.exports = class Product {
    constructor(id, title, price, description, imageUrl) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {

    }

    static fetchAll() {
        return db.execute("SELECT * FROM products");
    }

    static findById(id) {

    }

    static deleteById(id) {

    }
}