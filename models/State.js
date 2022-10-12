var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    name:{type:String,required:true},

    population:{type:String,required:true}

});

var State = mongoose.model("States",schema);

module.exports = State;
