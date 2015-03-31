var models = require('../models/models');
var moment = require('moment-timezone');
var Van = models.Van;

var home = function (req, res) {
    Van.find({}).sort({'timestamp':'desc'}).exec(function(err,data){
        if (err) return handleError(err);
        if (data.length) {
            var lastTime = moment(data[0].timestamp).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a z');
            res.render('home', {'lastPlace': data[0].place, 'lastTime': lastTime});}
        else {res.render('home', {'lastPlace': 'Nowhere', 'lastTime': 'Never'})};
    });
};

module.exports.home = home;