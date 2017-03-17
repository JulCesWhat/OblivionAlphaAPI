
// Type 3: Persistent datastore with automatic loading
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'database/db/AWSKeyManagement.db', autoload: true });

module.exports = db;