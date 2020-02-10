var express = require('express');
var app = express();

const hbs = require('express-handlebars');
const path = require('path');
const uploadRouter = require('../routes/upload');

app.get('/', function (req, res) {
    res.render('home', {
        title: 'Using handlebars',
        condition: false,
        list: [{
        name: "Juan",
        age: 25
        }, {
        name: "María",
        age: 24
        }]
        }
       );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, '../views/layouts/')
   }));
   app.set('view engine', 'hbs');

app.use(uploadRouter);

