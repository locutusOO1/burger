var connection = require("./connection.js");

const questionMarks = (vals) => vals.map(() => "?").toString();

var orm = {
    selectAll: function(table,cb) {
        let qry = "select * from ??";
        connection.query(qry, [table], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table,cols,vals,cb) {
        let qry = `insert into ${table} (${cols.toString()}) values (${questionMarks(vals)})`;
        connection.query(qry, vals, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table,condition,cb) {
        let qry = `update ${table} set devoured = 1 where ${condition}`;
        connection.query(qry, [table], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;