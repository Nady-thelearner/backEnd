var userService = require("./userService"); 


var getDataControllerfn = async (req, res) => {
  var employee = await userService.getDataFromDB();
  res.send({ status: true, data: employee ,"message":"NAdeem"});
};

var createUserControllerfn = async(req , res) =>{
    console.log(req.body);
    var status =  await userService.createUserInDB(req.body)
    console.log(status)

    if(status){
        res.send({"status":true ,"message":"USer Created Successfully."})
    }
    else{
        res.send({"status": false,"message":"User creation Failed."})
    }
}

module.exports = {getDataControllerfn,createUserControllerfn}
