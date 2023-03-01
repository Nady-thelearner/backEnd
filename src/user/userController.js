var userService = require("./userService");

var getDataControllerfn = async (req, res) => {
  var employee = await userService.getDataFromDB();
  if (employee) {
    res.send({ status: true, data: employee });
  } else {
    res.send({ status: false, message: "User fetch Failed." });
  }
};

var createUserControllerfn = async (req, res) => {
  var status = await userService.createUserInDB(req.body);

  if (status) {
    res.send({ status: true, message: "USer Created Successfully." });
  } else {
    res.send({ status: false, message: "User creation Failed." });
  }
};

var updateUserControllerFn = async (req, res) => {
  var upd = await userService.updateUserInDB(req.params.id, req.body);

  if (upd) {
    res.send({ status: true, message: "User Updated Succcessfully." });
  } else {
    res.send({ status: false, message: "Failed to update." });
  }
};

var deleteUserControllerFn = async (req, res) => {
  var result = await userService.deleteUserInDB(req.params.id);

  if (result) {
    res.send({ status: true, message: "User deleted Successfully" });
  } else {
    res.send({ status: false, message: "Failed to delete." });
  }
};

module.exports = {
  getDataControllerfn,
  createUserControllerfn,
  updateUserControllerFn,
  deleteUserControllerFn
};
