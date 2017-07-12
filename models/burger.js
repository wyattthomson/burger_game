var orm = require('../config/orm.js');

var burgerModel = {
    all: function () {
      orm.all()
    },

    create: function(name) {
      orm.create(burgerName)
    },

    update: function(id) {
      orm.update(id)
    }
}

module.exports = burgerModel