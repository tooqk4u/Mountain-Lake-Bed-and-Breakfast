const router = require("express").Router();
const { Room, Amenities,   User } = require("../models");

router.get("/:id", (req, res) => {
  Room.findOne({
    where: { id: req.params.id },
    include: [
      { model: Amenities },
      //{ model: Booking_Dates, attributes: ["start_date", "end_date"] },
      /* {
        model: Comment,
        attributes: ["comment_text"],
        include: [{ model: User, attributes: ["first_name"] }],
      }, */
    ],
  }).then( (dbRoomData) => {
      if (dbRoomData){
    
   console.log(dbRoomData)
    const room_details =  dbRoomData.get({ plain: true })
    res.render("room-details", { room_details });

      }else {
        res.status(404).end();
      }
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports=router