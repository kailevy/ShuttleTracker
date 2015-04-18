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

var feedbackSchema = mongoose.Schema({
    name: String,
    feedback: String
})

var Van = mongoose.model("Van", vanSchema);
var Fake = mongoose.model("Fake", fakeSchema);
var Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports.Van = Van;
module.exports.Fake = Fake;
module.exports.Feedback = Feedback;