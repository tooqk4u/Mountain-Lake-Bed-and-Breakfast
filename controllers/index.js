const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);
const homeRoute = require('./home-routes')
router.use('/', homeRoute)

const RoomsRoute = require("./rooms-routes.js")
router.use("/rooms", RoomsRoute)

const RoomDetailsRoute = require("./roomDetail_routes.js")
router.use("/room-details", RoomDetailsRoute)

module.exports = router;