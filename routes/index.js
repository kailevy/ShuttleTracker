var models = require('../models/models');
var moment = require('moment-timezone');
var Van = models.Van;
var Fake = models.Fake

var home = function (req, res) {
    Van.find({}).sort({'timestamp':'desc'}).exec(function(err,data){
        if (err) return handleError(err);
        if (data.length) {
            Fake.findOne({}, function(err,fakeData){
                if (err) {
                    console.log('Error!')
                }
                var lastTime = moment(data[0].timestamp).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a z');
                res.render('home', {'lastPlace': data[0].place, 'lastTime': lastTime, 'displaying': fakeData.displaying,
                'place':fakeData.place, 'minutes':fakeData.minutes, 'fakeImage': '/images/' + fakeData.image + '.png'});
            })
        }
        else {res.render('home', {'lastPlace': 'Nowhere', 'lastTime': 'Never'})};

    });
};

module.exports.home = home;