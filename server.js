var express = require("express");
var server = express();
var routes = require("./routes/routes");
const cors = require("cors");

var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/myFirstDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log("Error connecting to the DB");
    } else {
      console.log("DB Connected");
    }
  }
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, (error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("Startedd");
  }
});
