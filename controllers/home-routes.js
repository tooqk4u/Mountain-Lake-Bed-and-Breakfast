const router = require('express').Router()
const { Room } = require("../models");


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
      res.render("homepage", { rooms });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/login',(req, res)=> {
  res.render('login')
})
module.exports = router