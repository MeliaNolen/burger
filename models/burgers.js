var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },

    insertOne: function(colOne, colTwo, valOne, valTwo, cb) {
        orm.insertOne('burgers', colOne, colTwo, valOne, valTwo, function(result) {
            cb(result);
        })
    },

    updateOne: function(colOne, newColValue, idCol, idValue, cb) {
        orm.updateOne('burgers', colOne, newColValue, idCol, idValue, function(result) {
            cb(result);
        })

    }
};

module.exports = burgers;