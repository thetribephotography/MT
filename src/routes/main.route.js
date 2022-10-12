require('dotenv').config()

// const router = require('express').Router()


const mainRoute = require('express').Router();

// const siteController = require('../controllers/site.controller');
// const api = require('./api/api.router');
const web = require('./web/web.router');
 
mainRoute.use('/', web);
// mainRoute.use('/api', api);

module.exports=mainRoute
