const express = require("express");

const route = express.Router();
const adminController = require("../controllers/adminController");

//add product => GET
route.get("/add-product", adminController.getAddProduct)

//add product => POST
route.post("/add-product", adminController.postProduct);

module.exports = route;