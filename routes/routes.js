var express = require("express");
// var userController = require("..src/user/userController");
var userController = require("../src/user/userController");
var router = express.Router();

router.route("/user/getAll").get(userController.getDataControllerfn);
router.route("/user/create").get(userController.createUserControllerfn);

module.exports = router;
