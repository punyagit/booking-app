const express = require('express');
const bcrypt = require('bcrypt');

const Login = require('../model/signUp')
const loginRouter = express.Router();

loginRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })


    .post((req, res, next) => {
        let userName = req.body.userName;
        let password = req.body.password;

        Login.findOne({ userName }) // destructuring
            .then(data => {
                if (data !== null) {
                    let dbPassword = data.password;
                    bcrypt.compare(password, dbPassword)
                        .then((resp) => {
                            res.send(resp ? "you are logged in" : "your user name or password doesnt match");
                        });

                } else {
                    res.status(400);
                    res.end("your user name or password doesnt match ");
                }
            })

    })


loginRouter.route('/:loginId')

    .put((req, res, next) => {
        Login.findByIdAndUpdate(req.params.loginId, { $set: req.body })
            .then(data => { res.json(data) });


    })






module.exports = loginRouter;