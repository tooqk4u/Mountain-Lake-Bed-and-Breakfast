const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);
const homeRoute = require("./home-routes");
router.use("/", homeRoute);
const RoomsRoute = require("./rooms-routes.js");
router.use("/rooms", RoomsRoute);
const RoomDetailsRoute = require("./roomDetail_routes.js");
router.use("/room-details", RoomDetailsRoute);

const dashboardRoute = require('./dashboard-routes')
router.use('/dashboard', dashboardRoute)

const signupRoute = require('./signup-route')
router.use('/signup', signupRoute)

module.exports = router;
