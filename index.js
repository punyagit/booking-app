const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .post('/login', function(req, res) {
    if (req.body.id === '' || req.body.password === '') {
      res.render('pages/login', { message: 'Please Enter Id and Password' });
    } else if (req.body.id !== 'punya' || req.body.password !== 'nepal') {
      res.render('pages/login', { message: 'Wrong id Or Password' });
    }
    res.render('pages/admin');
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
