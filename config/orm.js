var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne : function(tableName, colOne, colTwo, valOne, valTwo, cb) {
        var queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)'
        connection.query(queryString, [tableName, colOne, colTwo, valOne, valTwo],function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne : function(tableName, colOne, newColValue, idCol, idValue, cb) {
        var queryString = 'UPDATE ?? SET ??=? WHERE ??=?';
        console.log(queryString);
        connection.query(queryString, [tableName, colOne, newColValue, idCol, idValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;