lconst router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./home-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoute)
const RoomsRoute = require("./rooms-routes.js")
router.use('/api', apiRoutes);
router.use("/rooms", RoomsRoute)

const homeRoute = require('./home-routes')
router.use('/', homeRoute)

const RoomsRoute = require("./rooms-routes.js")
router.use("/rooms", RoomsRoute)

const RoomDetailsRoute = require("./roomDetail_routes.js")
router.use("/room-details", RoomDetailsRoute)

module.exports = router;