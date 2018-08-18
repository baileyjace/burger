var orm = require("../config/orm.js");

var burger = {

    showAll: function (cb) {
        orm.showAll(function (res) {
            cb(res);
        });
    },

    newBurger: function (burger, cb) {
        orm.newBurger(burger, function (res) {
            cb(res);
        });
    },

    devourBurger: function (id, cb) {
        orm.devourBurger([id], function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
