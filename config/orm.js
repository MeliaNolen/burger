var connection = require('./connection.js');

var orm = {
    selectAll: function(tableName, colName, colValue, cb) {
        var queryString = 'SELECT * FROM ?? WHERE ?? = ?';
        connection.query(queryString, [tableName, colName, colValue], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne : function(tableName, colOne, colTwo, valOne, valTwo, idCol, idVal, cb) {
        var queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?) WHERE ?? = ?'
        connection.query(queryString, [tableName, colOne, colTwo, valOne, valTwo, idCol, idVal],function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne : function(tableName, colOne, newColValue, colTwo, colTwoValue, cb) {
        var queryString = 'UPDATE ?? SET ??=? WHERE ??=?';
        connection.query(queryString, [tableName, colOne, newColValue, colTwo, colTwoValue], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;