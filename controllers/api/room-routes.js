const router = require('express').Router();
const { Room, Amenities } = require('../../models');

router.get('/', (req, res) => {
    Room.findAll({
        include: 
            {
                model: Amenities,
                attributes: ['smoking', 'view_type']
            }
    })
    .then(dbRoomData => res.json(dbRoomData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;