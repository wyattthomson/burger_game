var connection = require('./connection.js')

var orm = {
    all: function(burgerTable, cb) {
      connection.query("SELECT * FROM" + burgerTable + ";", function(err,result) {
        if(err) {
          throw err;
        }
        cb(result);
      })
    }

    create: function(burgerName, cb) {
      connection.query("INSERT INTO burgers(burger_name, devoured) VALUES (" + burgerName + ", false)")
    }
}

module.exports = orm;