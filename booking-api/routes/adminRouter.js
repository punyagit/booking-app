const express = require('express');
//const bodyParser = require('body-parser');


const User = require('../model/users')
const adminRouter = express.Router();
//adminRouter.use(bodyParser.json());
adminRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })

    .get((req, res, next) => {
        User.find()
            .then(data => { res.send(data) });

    })

    .post((req, res, next) => {
        User.create(req.body)
            .then(data => {
                console.log("user created")
                res.json(data)
            })
    })

adminRouter.route('/:userId')

    .put((req, res, next) => {
        User.findByIdAndUpdate(req.params.userId, { $set: req.body })
            .then(data => { res.json(data) });


    })






module.exports = adminRouter;