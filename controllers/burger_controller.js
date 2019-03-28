var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burger");
});

router.get("/burger", function(req, res) {
    burger.all(function(data) {
        var handlebarsObject = {
        burger: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
    });
});

router.post("/burger", function(req, res) {
    burger.create(
        ["burger_name"], [req.body.burger_name], function() {
            res.redirect("/burger");
        });
});

router.put("/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
    {"devoured": req.body.devoured}, condition, function(data) {
            res.redirect("/burger");
    });
});

module.exports = router;