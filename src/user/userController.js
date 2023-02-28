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

/* catch(e){
    console.log(e);
} */

module.exports = { getDataControllerfn, createUserControllerfn };
