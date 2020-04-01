const express = require('express');
const adminRouter = express.Router();
let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./routes/mynewfile3.json', 'utf8'));

adminRouter.get('/', (req, res) => res.render('pages/login'));

adminRouter.get('/adminPage', (req, res) =>
  res.render('pages/admin', { data: data }),
);

adminRouter.post('/', (req, res) => {
  if (req.body.id === '' || req.body.password === '') {
    res.render('pages/login', {
      message: 'Please Enter Id and Password',
    });
  } else if (req.body.id !== 'punya' || req.body.password !== 'nepal') {
    res.render('pages/login', { message: 'Wrong id Or Password', data: data });
  } else {
    res.redirect('/login/adminPage');
  }
});
adminRouter.get('/admin', (req, res) => {
  res.render('pages/addMember');
});
adminRouter.post('/admin', (req, res) => {
  res.render('pages/addMember');
});

module.exports = adminRouter;
