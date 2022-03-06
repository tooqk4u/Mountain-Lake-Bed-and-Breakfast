const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoute = require('./home-routes')
router.use('/', homeRoute)

const RoomsRoute = require("./rooms-routes.js")
router.use('/api', apiRoutes);
router.use("/rooms", RoomsRoute)


module.exports = router;