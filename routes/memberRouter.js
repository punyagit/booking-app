const express = require('express');
const memberRouter = express.Router();
let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./routes/mynewfile3.json', 'utf8'));

memberRouter.get('/addMember', (req, res) =>
  res.render('pages/admin', { message: 'Member added', data: data }),
);

memberRouter.post('/addMember', (req, res) => {
  if (req.body.member === '') {
    res.render('pages/addMember', {
      message: 'Please Enter Member Name ',
    });
  } else {
    data.push({ name: req.body.member, matchPlayed: 0, win: 0 });
    fs.writeFile('./routes/mynewfile3.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Saved!');
      res.render('pages/admin', { message: 'Member added', data: data });
    });
  }
});

module.exports = memberRouter;
