var path = require('path');
var models = require('../models/models');
var moment = require('moment-timezone');
var routes = {};

var Van = models.Van;
var Fake = models.Fake;


routes.submit = function(req, res) {
    // console.log('body', req.body)
    var vanUpdate = new Van({place:req.body.data})
    vanUpdate.save(function(err,data){
        if (err) {
            console.log('Error!')
        }
        var obj = new Object();
        obj.place = vanUpdate.place;
        obj.timestamp = moment(vanUpdate.timestamp).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a z');
        res.send(obj)
        // console.log(obj)
    });
};

routes.fakeSubmit = function(req, res) {
    Fake.findOne({},function(err,data){
        if (err) {
            console.log('Error!')
        }
        if (!data) {
            var fakeUpdate = new Fake({place:req.body.place, minutes:req.body.minutes, image:req.body.image,
            displaying:req.body.displaying})
            fakeUpdate.save()
            console.log('hello')
            res.send(data)
        }
        else {
            data.image = req.body.image
            data.place = req.body.place
            data.minutes = req.body.minutes
            data.displaying = req.body.displaying
            data.save()
            console.log('po')
            res.send(data)
        }
    })
};


function printDate(date) {
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
};

module.exports = routes;