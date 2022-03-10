const router = require("express").Router();
const { Room, Amenities } = require("../models");

router.get("/", (req, res) => {
  Room.findAll({
    attributes: [
      "id",
      "room_name",
      "room_price",
      "room_img",
      "room_description",
    ],
  })
    .then((dbRoomData) => {
      const rooms = dbRoomData.map((room) => room.get({ plain: true }));
      res.render("rooms", { rooms, loggedIn:req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
