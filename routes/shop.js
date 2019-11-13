const express = require("express");
const route = express.Router();
const homeController = require("../controllers/adminController");

route.get("/", homeController.getProduct);

module.exports = route;