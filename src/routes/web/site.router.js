const siteController = require('../../controllers/site.controller');
const helpers = require('../../helpers/auth.guard')
const siteRouter = require('express').Router();

siteRouter.get('/', siteController.login)
siteRouter.post('/',  helpers.auth('local', {
    failureRedirect : "/",
    failureFlash : true
}),(req, res)=>{
    helpers.redirect(req, res, req.user.Role.name)
} )