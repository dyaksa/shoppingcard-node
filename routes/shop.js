const express = require("express");
const route = express.Router();
const shopController = require("../controllers/shopController");

// => GET
route.get("/", shopController.getIndex);

// /cart => GET
route.get("/cart", shopController.getCart);

// /checkout => GET
route.get("/checkout", shopController.getCheckout);


// /product => GET
route.get("/products", shopController.getProduct);

module.exports = route;