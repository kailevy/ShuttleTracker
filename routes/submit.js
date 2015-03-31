var path = require('path');

var models = require('../models/models');

var routes = {};

var Van = models.Van;

// routes.submit = function(req, res) {
//   console.log(req.body);
//   res.end('.');
// };

routes.submit = function(req, res) {
    console.log('body', req.body)
    var vanUpdate = new Van({place:req.body.data})
    vanUpdate.save(function(err,data){
        if (err) {
            console.log('Error!')
        }
        console.log('saved')
    });
    res.send(req.body.data)
};

module.exports = routes;