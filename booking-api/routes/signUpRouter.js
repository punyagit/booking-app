const express = require('express');
const signUp = require('../model/signUp');
const User = require('../model/user')
const signUpRouter = express.Router();

signUpRouter.route('/')

    .get((req, res, next) => {
        signUp.find()
            .then(data => {
                res.send(data)
            })

    })

    .post((req, res, next) => {
        let cardNo = req.body.cardNo

        User.findOne({ cardNo: cardNo })
            .then((data) => {

                if (data === null) {
                    res.send("card is not registered");
                }
                else {
                    signUp.create(req.body)
                        .then(data => {
                            console.log("user created");
                            res.json(data);
                        })

                }

            })
            .catch((err) => {
                console.log(err)
            })


    })





module.exports = signUpRouter;