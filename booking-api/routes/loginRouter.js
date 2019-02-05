const express = require('express');



const Login = require('../model/Login')
const loginRouter = express.Router();

loginRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })


    .post((req, res, next) => {
        if (req.body.userName === "punya") {
            Login.find()
                .then(data => { res.send(data) });

        } else {
            res.status(400);
            res.end("You are not authorized ");
            console.log("No matching data");
        }


    })


loginRouter.route('/:loginId')

    .put((req, res, next) => {
        Login.findByIdAndUpdate(req.params.loginId, { $set: req.body })
            .then(data => { res.json(data) });


    })






module.exports = loginRouter;