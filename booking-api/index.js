const express = require("express");
const app = express();
const Config = require("./config/config.json");
const bodyParser = require('body-parser');
const port = Config.port || 4000;
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(bodyParser.json());


app.all("/", function (req, res, next) {


  console.log("Accessing the secret section ...");


  next(); // pass control to the next handler
});
app.get("/", function (req, res, next) {
  console.log(req.header)
  res.send("hello")
});

app.post("/", function (req, res, next) {

});

console.log("heloo");
app.listen(port, console.log("Starting Server in Port " + port));
