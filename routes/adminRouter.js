const express = require('express');
const adminRouter = express.Router();
let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./routes/mynewfile3.json', 'utf8'));

adminRouter.get('/', (req, res) => res.render('pages/login'));

adminRouter.get('/adminPage', (req, res) =>
  res.render('pages/admin', { data: data, message: 'ok' }),
);

adminRouter.get('/admin', (req, res) => {
  res.render('pages/addMember');
});

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

adminRouter.post('/admin', (req, res) => {
  if (req.body.member === '') {
    res.render('pages/addMember', {
      message: 'Please Enter Member Name ',
    });
  } else {
    data.push({ name: req.body.member, matchPlayed: 0, win: 0 });
    fs.writeFile('./routes/mynewfile3.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      res.render('pages/addMember', {
        message: 'Member Added',
      });
    });
  }
});

adminRouter.post('/adminPage', (req, res) => {
  let data = req.body;
  fs.writeFileSync('./routes/mynewfile3.json', JSON.stringify(data));
  // fs.writeFile('./routes/mynewfile3.json', JSON.stringify(data), (err) => {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });
  res.render('pages/admin', { data: data });
});

module.exports = adminRouter;
