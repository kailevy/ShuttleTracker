var mongoose = require("mongoose");

var vanSchema = mongoose.Schema({
    place: String,
    timestamp: {type: Date, default: Date.now}
})

var fakeSchema = mongoose.Schema({
    place: String,
    minutes: String,
    image: String,
    displaying: Boolean
})

var Van = mongoose.model("Van", vanSchema);
var Fake = mongoose.model("Fake", fakeSchema);

module.exports.Van = Van;
module.exports.Fake = Fake;