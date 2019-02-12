const express = require('express');
const Login = require('../model/signUp')


const User = require('../model/user')
const adminRouter = express.Router();

adminRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })

    .get((req, res, next) => {


        User.find()

            .then(data => {
                let obj1 = { add: "salm" }
                data.forEach((da) => {

                    let cardNo = da.cardNo
                    Login.find({ cardNo })
                        .then((value) => {

                            if (value.length < 1) {
                                return Promise.resolve({})
                            } else {
                                return Promise.resolve({ name: "punya" })
                            }

                        }).then((v) => {
                            obj1 = { ...obj1, ...v }
                            console.log(obj1)
                        })

                })


            })
    })

    .post((req, res, next) => {
        User.create(req.body)
            .then(data => {
                res.json(data)
            })
    })

adminRouter.route('/:userId')

    .put((req, res, next) => {
        User.findByIdAndUpdate(req.params.userId, { $set: req.body })
            .then(data => { res.json(data) });


    })






module.exports = adminRouter;