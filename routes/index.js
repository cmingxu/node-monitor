/*
 * GET home page.
 */

var Schema = require('../models/schema');
var Statistic  = Schema.Statistic;
var ServerIdentifier = Schema.ServerIdentifier;

var Criteria = ["RSS", "CPU", "REAL"];

exports.index = function(req, res){
  // time interval that matters
  var timeInteval = req.params.ti;
  // which component 
  var comp = req.params.comp;
  // criteria
  var criteria = req.params.criteria;

  Statistic.find({}, function (err, docs) {
    res.render('index', { request_params: req.params, docs: docs, criterion: Criteria, title: "Title" });
  });
};


exports.create_stats = function(req, res){
  var stat = new Statistic();
  var json_body = JSON.parse(req.body);
  stat.ip = req.connection.remoteAddress;
  stat.created_at = new Date();
  stat.request_body = req.body;
  stat.memrss = json_body.memrss;
  stat.memheapUsed = json_body.memheapUsed;
  stat.memheapTotal = json_body.memheapTotal;
  stat.save(function(err){ console.log(err); });
  res.end();
};
