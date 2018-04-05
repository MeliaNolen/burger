var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(colName, colValue, cb) {
        orm.selectAll('burgers', colName, colValue, function(result) {
            cb(res);
        });
    },

    insertOne: function(colOne, colTwo, valOne, valTwo, idCol, idVal, cb) {
        orm.insertOne('burgers', colOne, colTwo, valOne, valTwo, idCol, idVal, function(result) {
            cb(result);
        })
    },

    updateOne: function(colOne, newColValue, colTwo, colTwoValue, cb) {
        orm.updateOne('burgers', colOne, newColValue, colTwo, colTwoValue, function(result) {
            cb(result);
        })

    }
};

module.exports = burgers;