exports.index = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Home Page Shop"
    })
}