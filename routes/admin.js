const express = require("express");

const route = express.Router();

//add product => GET
route.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product"
    });
});

//add product => POST
route.post("/add-product", (req, res, next) => {
    const title = req.body.title;
    res.redirect("/");
});

module.exports = route;