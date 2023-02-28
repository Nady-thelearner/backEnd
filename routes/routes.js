var express = require("express");
// var userController = require("..src/user/userController");
var router = express.Router();
var userController = require("../src/user/userController");

router.route("/user/getAll").get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerfn);

module.exports = router;
