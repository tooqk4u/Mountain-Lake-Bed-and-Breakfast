const router = require('express').Router();

const apiRoutes = require('./api');
const RoomsRoute = require("./rooms-routes.js")
router.use('/api', apiRoutes);
router.use("/rooms", RoomsRoute)

module.exports = router;