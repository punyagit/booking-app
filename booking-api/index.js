const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Config = require('./config/config.json');
const adminRouter = require('./routes/adminRouter');
const signUpRouter = require('./routes/signUpRouter');
const loginRouter = require('./routes/loginRouter');

const port = Config.port || 4000;
const mongoServer = '127.0.0.1:27017';



(mongoose.connect(`mongodb://${mongoServer}/booking`, {
    useNewUrlParser: true,
    useCreateIndex: true,
}))
    .then(() => {
        console.log("connected");

    })
    .catch((err) => {
        console.log(err);
    })



app.use(morgan('dev'));
app.use(bodyParser.json());



app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);


app.listen(port, console.log("Starting Server in Port " + port));
