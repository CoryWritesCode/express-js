const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  fs.appendFileSync(path.join(__dirname, '../public/formsubmissions'), `Name: ${req.body.name}\n`);
  fs.appendFileSync(path.join(__dirname, '../public/formsubmissions'), `Email: ${req.body.email}\n`);
  res.send('Thank you for your trust');
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);