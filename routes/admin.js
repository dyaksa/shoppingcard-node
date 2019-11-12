const express = require("express");

const route = express.Router();
const adminController = require("../controllers/adminController");

//add product => GET
route.get("/add-product", adminController.index)

//add product => POST
route.post("/add-product", (req, res, next) => {
    const title = req.body.title;
    res.redirect("/");
});

module.exports = route;