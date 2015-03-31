var models = require('../models/models');
var moment = require('moment-timezone');
var Van = models.Van;

var sightings = function (req, res) {
    Van.find({}).sort({'timestamp':'desc'}).exec(function(err,data){
        if (err) return handleError(err);
        for (var i = 0; i<data.length; i++){
            data[i].timeprint = moment(data[i].timestamp).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a z');
            };
        res.render('sightings', {'sighting': data});
    });
};

module.exports.sightings = sightings;