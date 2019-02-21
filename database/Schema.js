var mysql = require('mysql');

//Note: to insert the database credential
var dbConnection = mysql.createConnection({
    host: "db4free.net",
    user: "angular",
    password: 'angularangular',
    insecureAuth: true,
    database: 'angular'
  });

//Note:create the connection
dbConnection.connect(function(err) {
    if (err) {
      console.log('access denied to the database', err)
    } else {
      console.log('database has been connected')
    }
  });


// Create user table
var users = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(225) NOT NULL,
    PRIMARY KEY (id) 
  );
`

// Note:create the table
dbConnection.query(users, function(err, result) {
    if (result) {
      console.log('users table has been created');
    } else {
      console.log('users table return an ERROR', err);
    }
  })

  module.exports.Schema = dbConnection