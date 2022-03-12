const router = require("express").Router();
const { Room, User, Booking_Dates } = require("../models");
const { Op } = require("sequelize");
const dayjs = require("dayjs");
const withAuth = require('../utils/auth')


router.get("/", withAuth, (req, res) => {
  User.findOne({
    where:{id: req.session.user_id},
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Booking_Dates, required:false, 
        where: {
          start_date: { [Op.gte]: dayjs() },
        },
        include: [{ model: Room, attributes: ["room_name", "room_price"] }],
      },
    ],
  })
    .then((dbDashData) => {
      const dashData = dbDashData.get(({plain: true}))
      console.log(dashData)
      res.render("dashboard", { dashData, loggedIn: true });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
