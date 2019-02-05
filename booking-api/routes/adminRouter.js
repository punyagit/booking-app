const express = require('express');
const bodyParser = require('body-parser');


const adminRouter = express.Router();

adminRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })

    .get((req, res, next) => {
        res.send("i am sending you the data");
    })

    .post((req, res, next) => {
        res.send("data posted")
    })

    .put((req, res, next) => {

    })






module.exports = adminRouter;