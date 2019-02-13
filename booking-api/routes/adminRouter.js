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
        let count = 0
        const promise = () => User.find()
            .then((data) => {

                return data
            }).then((data) => {
                let cardNo;
                data.forEach((da) => {
                    cardNo = da.cardNo

                })


            })

        promise().then((dp) => {
            console.log(dp)
        })




        // User.find()

        //     .then(data => {
        //         let dap = 0;

        //         data.forEach((da) => {

        //             let cardNo = da.cardNo
        //             Login.find({ cardNo })
        //                 .then((value) => {

        //                     if (value.length < 1) {
        //                         let dap = 20
        //                         return dap
        //                     } else {
        //                         let _id = value[0]._id
        //                         let address = value[0].address
        //                         let userName = value[0].userName
        //                         let cardNo = value[0].cardNo
        //                         let email = value[0].email
        //                         let phoneNo = value[0].phoneNo

        //                         let userData = { _id, cardNo, address, userName, email, phoneNo }
        //                         let ba = 20
        //                         //return Promise.resolve(da)

        //                     }
        //                     console.log(dap)

        //                 })
        //         })


        //     })

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