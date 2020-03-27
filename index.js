const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const adminRouter = require('./routes/adminRouter');
const memberRouter = require('./routes/memberRouter');

let fs = require('fs');
let data = JSON.parse(fs.readFileSync('./routes/mynewfile3.json', 'utf8'));
//let data = fs.readFileSync('./routes/mynewfile3.json', 'utf8');

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', { data: data }))
  .use('/login', adminRouter)
  .use('/login/admin', memberRouter)

  .listen(PORT, () => console.log(`Listening on ${PORT}`));
