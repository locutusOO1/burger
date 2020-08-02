var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne("burgers", cols, vals, function(result) {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne("burgers", condition, function(result) {
            cb(res);
        });
    }
};

module.exports = burger;