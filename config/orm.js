var connection = require('./connection.js')

var orm = {
    all: function() {
      connection.query("SELECT * FROM" burgers;", function(err,result) {
        if(err) {
          throw err;
        }
        console.log("burger selected!");
      })
    }

    create: function(burgerName) {
      connection.query("INSERT INTO burgers(burger_name, devoured) VALUES ('" + burgerName + "', false)")
        if(err) {
          throw err;
        }
        console.log("burger added!");
      })
    },

    update: function(burderId) {
      connection.query("UPDATE burgers SET devoured = true WHERE id = " + burgerId, function(err,result) {
        if(err) {
          throw err;
        }
        console.log("burger eaten");
      })
    }
}

module.exports = orm;