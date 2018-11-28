const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();
let i = 0

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {

  let formPath = path.join(__dirname, '../server/formsubmissions/forms.json');
  let name = req.body.name;
  let email = req.body.email;

  fs.readFile(formPath, (err, data) => {
    if (err) throw err;

    var json = JSON.parse(data);

    console.log(json);

    json[`name${i}`] = `${name}`;
    json[`email${i}`] = `${email}`;

    console.log(json);

    fs.writeFile(formPath, JSON.stringify(json), (err) => {
      if (err) throw err;
    });
    
    i++

  })

  res.send('Thank you for your trust');
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);