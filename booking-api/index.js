const express = require("express");
const app = express();
const Config = require("./config/config.json");
const port = Config.port || 4000;

app.listen(port, console.log("Starting Server in Port " + port));
