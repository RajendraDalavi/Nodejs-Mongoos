var mongoose = require("mongoose");
var Schema = mongoose.Schema

var schema = new Schema({
    name:{type:String,required:true},
    currency:{type:String,required:true}

});

var Country = mongoose.model("countries",schema);

module.exports = Country;






