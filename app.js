const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const homeRoute = require("./routes/shop");

//port
const port = process.env.PORT || 3000;

//init express
const app = express();
//set template engine
app.set("view engine", "ejs");
//use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
app.use("/admin", adminRoute);
app.use(homeRoute);
app.use((req, res, next) => {
    res.status(404).render("404", {
        pageTitle: "Page Not Found"
    });
})

//express listen
app.listen(port);