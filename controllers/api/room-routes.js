const router = require("express").Router();
const { Room, Amenities } = require("../../models");

router.get("/", (req, res) => {
  Room.findAll({
    include: {
      model: Amenities,
      attributes: ["smoking", "view_type"],
    },
  })
    .then((dbRoomData) => res.json(dbRoomData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Room.create({
    room_name: req.body.room_name,
    room_number: req.body.room_number,
    room_price: req.body.room_price,
    room_size: req.body.room_size,
  })
    .then((dbRoomData) => res.json(dbRoomData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
