var mongoose = require("mongoose");

var vanSchema = mongoose.Schema({
    place: String,
    time: {type: Date, default: Date.now}
})

var Van = mongoose.model("Van", vanSchema);

module.exports.Van = Van;