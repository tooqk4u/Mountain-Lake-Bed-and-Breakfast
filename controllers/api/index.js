const router = require('express').Router();

const RoomRoutes = require('./room-routes');
router.use('/rooms', RoomRoutes);

const CommentRoutes = require("./comment-route")
router.use('/comments', CommentRoutes)

const userRoutes  = require("./user-routes")
router.use("/users", userRoutes)

const bookingRoutes= require("./booking-routes")
router.use("/booking", bookingRoutes)

module.exports = router;