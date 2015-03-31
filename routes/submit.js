var path = require('path');

var models = require('../models/models');

var routes = {};

var Van = models.Van;


routes.submit = function(req, res) {
    // console.log('body', req.body)
    var vanUpdate = new Van({place:req.body.data})
    vanUpdate.save(function(err,data){
        if (err) {
            console.log('Error!')
        }
        var times = printDate(new Date(vanUpdate.timestamp));
        var obj = new Object();
        obj.place = vanUpdate.place;
        obj.timestamp = times
        res.send(obj)
        console.log(obj)
    });
};

function printDate(date) {
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
};

module.exports = routes;