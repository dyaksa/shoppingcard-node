const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
    res.render("shop", {
        pageTitle: "Home Shop"
    });
});

module.exports = route;