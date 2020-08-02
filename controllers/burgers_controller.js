var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req,res) => burger.insertOne(["burger_name"],[req.body.burger_name], result => res.json({id: result.insertId})));

router.put("/api/burgers/:id", (req,res) => {
    var condition = `id = ${req.params.id}`;
    burger.updateOne(condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;