const express = require('express');
const adminRouter = express.Router();
let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./routes/mynewfile3.json', 'utf8'));
console.log(data);
adminRouter.get('/', (req, res) => res.render('pages/login'));

adminRouter.post('/', (req, res) => {
  if (req.body.id === '' || req.body.password === '') {
    res.render('pages/login', { message: 'Please Enter Id and Password' });
  } else if (req.body.id !== 'punya' || req.body.password !== 'nepal') {
    res.render('pages/login', { message: 'Wrong id Or Password' });
  }
  res.render('pages/admin');
});

adminRouter.post('/admin', (req, res) => {
  if (req.body.member === '') {
    res.render('pages/admin', { message: 'Please Enter Id and Password' });
  }
  data.push({ name: req.body.member, matchPlayed: 0, win: 0 });
  fs.writeFile('./routes/mynewfile3.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Saved!');
  });

  res.render('pages/admin', { message: 'Member added' });
});

module.exports = adminRouter;
