const express = require('express');
const bcrypt = require('bcrypt');

const signUp = require('../model/signUp');
const User = require('../model/user')
const signUpRouter = express.Router();

signUpRouter.route('/')

    .get((req, res, next) => {
        signUp.find()
            .then(data => {
                console.log(data[0].password)
                res.send(data)
            })

    })

    .post((req, res, next) => {
        let cardNo = req.body.cardNo;
        let userName = req.body.userName;
        let password = req.body.password;
        let address = req.body.address;
        let email = req.body.email;
        let phoneNo = req.body.phoneNo

        User.findOne({ cardNo: cardNo })
            .then((data) => {

                if (data === null) {
                    res.send("card is not registered");
                }
                else {
                    bcrypt.hash(password, 10).then((hash) => {

                        password = hash;


                        signUp.create(
                            { userName, password, cardNo, address, email, phoneNo } // object destructuring
                        )
                            .then(data => {
                                //console.log("user created");
                                res.json(data);
                            })
                    })
                }

            })
            .catch((err) => {
                console.log(err)
            })


    })





module.exports = signUpRouter;