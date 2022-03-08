const router = require("express").Router();
const { Booking_Dates, Room, User } = require("../../models");

// Booked dates /api/bookings

router.get("/", (req, res) => {
    Booking_Dates.findAll({
    })
      .then((dbBookingData) => res.json(dbBookingData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.get("/:id", (req, res) => {
  Booking_Dates.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookingData) => res.json(dbBookingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/room/:id", (req, res) => {
  Booking_Dates.findOne({
    where: {
      room_id: req.params.id,
    },
  })
    .then((dbBookingData) => res.json(dbBookingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post("/", (req,res) => {
    Booking_Dates.create({
        user_id:req.body.user_id,
        room_id:req.body.room_id,
        start_date:req.body.start_date,
        end_date: req.body.end_date
    }).then((dbBookingData) => res.json(dbBookingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router