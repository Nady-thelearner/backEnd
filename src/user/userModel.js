var userService = require("./userService");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  empID: { type: Number },
  phone: { type: Number },
});

module.exports = mongoose.model("Employees", userSchema);
