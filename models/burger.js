var orm = require("../config/orm.js");

var burger = {
    selectAll: cb => orm.selectAll("burgers", result => cb(result)),
    insertOne: (cols,vals,cb) => orm.insertOne("burgers", cols, vals, result => cb(result)),
    updateOne: (condition,cb) => orm.updateOne("burgers", condition, result => cb(result))
};

module.exports = burger;