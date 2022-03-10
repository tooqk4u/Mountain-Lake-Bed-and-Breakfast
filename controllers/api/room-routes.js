const router = require("express").Router();

const { Room, Amenities, Booking_Dates } = require("../../models");

//find all
router.get("/", (req, res) => {
  Room.findAll({
    include: {
      model: Amenities,
      
    },
  })
    .then((dbRoomData) => res.json(dbRoomData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});

//find one
router.get("/:id", (req, res) => {
  Room.findOne({
    where: { id: req.params.id },
    attributes: {
      include: [
        {
          model: Amenities,
        },
        {
          model: Booking_Dates,
          attributes: ["user_id", "start_date", "end_date"],
        },
      ],
    },
  })
    .then((dbRoomData) => res.json(dbRoomData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new
router.post("/", (req, res) => {
  Room.create({
    room_name: req.body.room_name,
    room_number: req.body.room_number,
    room_price: req.body.room_price,
    room_size: req.body.room_size,
    room_description: req.body.room_description,
    room_img: req.body.room_description
  })
    .then((dbRoomData) => res.json(dbRoomData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update
router.put("/:id", (req, res) => {
  Room.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoomData) => {
      if (!dbRoomData) {
        res.status(404).json({ message: "no room with this id found" });
        return;
      }
      res.json(dbRoomData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Room.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoomData) => {
      if (!dbRoomData) {
        res.status(404).json({ message: "no room with this id found" });
        return;
      }
      res.json(dbRoomData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
