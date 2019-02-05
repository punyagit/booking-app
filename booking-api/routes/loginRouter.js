const express = require('express');



const Login = require('../model/Login')
const loginRouter = express.Router();

loginRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })

    .get((req, res, next) => {
        Login.find()
            .then(data => { res.send(data) });

    })

    .post((req, res, next) => {
        Login.create(req.body)
            .then(data => {
                console.log("user created")
                res.json(data)
            })
    })

loginRouter.route('/:loginId')

    .put((req, res, next) => {
        Login.findByIdAndUpdate(req.params.loginId, { $set: req.body })
            .then(data => { res.json(data) });


    })






module.exports = loginRouter;