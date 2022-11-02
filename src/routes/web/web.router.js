
const siteRouter = require('./site.router');
const adminRouter = require('./admin.router');
const userRouter = require('./user.router');

const helpers = require('../../helpers/auth.guard')


const webRouter = require('express').Router();

webRouter.use('/admin', helpers.auth, adminRouter);
webRouter.use('/user', helpers.auth, userRouter);
webRouter.use('/', siteRouter);

module.exports = webRouter;