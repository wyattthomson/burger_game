var connection = require('./connection.js')

var orm = {
    all: function(burgerTable, cb) {
      connection.query("SELECT * FROM" burgers;", function(err,result) {
        if(err) {
          throw err;
        }
        cb(result);
      })
    }

    create: function(burgerName, cb) {
      connection.query("INSERT INTO burgers(burger_name, devoured) VALUES ('" + burgerName + "', false)")
        if(err) {
          throw err;
        }
        cb(result);
      })
    },

    update: function(updatedBurger, cb) {
      connection.query("UPDATE burgers SET devoured = true WHERE burger_name = " + updateBurger, function(err,result) {
        if(err) {
          throw err;
        }
        cb(result);
      })
    }
}

module.exports = orm;