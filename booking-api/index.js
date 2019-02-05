const express = require("express");
const app = express();
const Config = require('./config/config.json');
const bodyParser = require('body-parser');
const port = Config.port || 4000;
const morgan = require('morgan');
const adminRouter = require('./routes/adminRouter');
app.use(morgan('dev'))
app.use(bodyParser.json());



app.use('/admin', adminRouter)

app.listen(port, console.log("Starting Server in Port " + port));
