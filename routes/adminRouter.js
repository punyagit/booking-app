const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = express.Router();

adminRouter.use(bodyParser.json());

adminRouter.route('/')

// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//next();
// })
app.get((req, res, next) => {
    res.send("send all the data")
});

app.post((req, res, next) => {

});

module.exports = adminRouter;

