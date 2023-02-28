var userService = require("./userService");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String,required : true },
  empID: { type: Number ,required : true },
  phone: { type: Number ,required : true},
});

module.exports = mongoose.model('employees', userSchema);
