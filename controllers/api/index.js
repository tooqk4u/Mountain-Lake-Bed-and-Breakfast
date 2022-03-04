const router = require('express').Router();

const RoomRoutes = require('./room-routes');

router.use('/rooms', RoomRoutes);

module.exports = router;