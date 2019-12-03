const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const homeRoute = require("./routes/shop");
const root = require("./utils/path");
const path = require("path");
const errorRoute = require("./controllers/error");
//port
const port = process.env.PORT || 3000;
const db = require("./utils/database");

//init express
const app = express();
//set template engine
app.set("view engine", "ejs");
app.set("views", "views");
//use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
//set static public folder
app.use(express.static(path.join(root, "public")));

//routes
app.use("/admin", adminRoute);
app.use(homeRoute);
app.use(errorRoute.get404Page);

//express listen
app.listen(port);