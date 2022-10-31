const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./src/models/index')

const app = express();
const port = process.env.ACCESS_PORT || 5700;


//passing middlewear
app.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());

//routing public folder
app.use(express.static('public'));

//setting template extension
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    layoutsDir: 'views/layouts',
    views:  'views',
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: 'views/_partials'

}))


//router
const mainRoute = require('./src/routes/main.route')
const { reverse } = require('dns')
app.use('/', mainRoute)

app.listen(port, function(){
    console.log('MT Running on PORT 5700 ')
});