var models = require('../models/models');
var Van = models.Van;

var home = function (req, res) {
    Van.find({}).sort({'time':'desc'}).exec(function(err,data){
        if (err) return handleError(err);
        if (data.length) {
            var lastTime = printDate(data[0].timestamp);
            res.render('home', {'lastPlace': data[0].place, 'lastTime': lastTime});}
        else {res.render('home', {'lastPlace': 'Nowhere', 'lastTime': 'Never'})};
    });
};

function printDate(date) {
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
};

module.exports.home = home;