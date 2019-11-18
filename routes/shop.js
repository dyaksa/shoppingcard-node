const express = require("express");
const route = express.Router();
const shopController = require("../controllers/shopController");

// => GET
route.get("/", shopController.getIndex);

// /cart => GET
route.get("/cart", shopController.getCart);
route.post("/cart", shopController.postCart);

// /checkout => GET
route.get("/checkout", shopController.getCheckout);

// /product => GET
route.get("/products", shopController.getProduct);
route.get("/product/:productId", shopController.getProductId);

route.get("/orders", shopController.getOrders);

module.exports = route;