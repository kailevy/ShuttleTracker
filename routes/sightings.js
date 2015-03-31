var models = require('../models/models');
var Van = models.Van;

var sightings = function (req, res) {
    Van.find({}).sort({'timestamp':'desc'}).exec(function(err,data){
        if (err) return handleError(err);
        res.render('sightings', {'sighting': data});
    });
};

module.exports.sightings = sightings;