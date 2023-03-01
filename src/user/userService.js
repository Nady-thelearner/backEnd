const userModel = require("./userModel");
// var userModule = require("./userModel");

module.exports.getDataFromDB = () => {
  return new Promise((resolve, reject) => {
    userModel.find({}, (error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.createUserInDB = (userDetails) => {
  return new Promise((resolve, reject) => {
    var userModelData = new userModel();

    userModelData.name = userDetails.name;
    userModelData.empID = userDetails.empID;
    userModelData.phone = userDetails.phone;

    userModelData.save((error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.updateUserInDB = (id, userDetails) => {
  console.log(userDetails);
  return new Promise((resolve, reject) => {
    userModel.findByIdAndUpdate(id, userDetails, (error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.deleteUserInDB = (id) => {
  return new Promise((resolve, reject) => {
    userModel.findByIdAndDelete(id, (error, result) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};
