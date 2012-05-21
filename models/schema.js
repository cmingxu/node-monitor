var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/my_database');


var ServerIdentifier = new Schema({
  identifier : String
});

var Statistic = new Schema({
    identifier   : ObjectId
  , ip           : String
  , memrss       : Number
  , memheapTotal : Number
  , memheapUsed  : Number
  , cpu          : Number
  , packageNum   : Number
  , connNum      : Number
  , created_at   : Date
  , request_body : String
});

var Statistic = mongoose.model('Statistic', Statistic);
var ServerIdentifier = mongoose.model('ServerIdentifier', ServerIdentifier);

module.exports =  {"Statistic": Statistic, "ServerIdentifier": ServerIdentifier };
