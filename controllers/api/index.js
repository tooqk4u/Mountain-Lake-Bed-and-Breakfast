const router = require('express').Router();

const RoomRoutes = require('./room-routes');
router.use('/rooms', RoomRoutes);

const CommentRoutes = require("./comment-route")
router.use('/comments',CommentRoutes)
module.exports = router;