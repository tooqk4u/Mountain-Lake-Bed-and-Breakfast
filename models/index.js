const User = require("./User");
const Room = require("./Room");
const Comment = require("./Comment");
const Booking_Dates = require("./Booking_Dates");
const Amenities = require("./Amenities");

// associations
Room.hasMany(Comment, {
  foreignKey: "room_id",
});

Comment.belongsTo(Room, {
  foreignKey: "room_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Room.hasMany(Amenities, {
  foreignKey: "room_id",
});

Amenities.belongsTo(Room, {
  foreignKey: "room_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Room, {
  through: Booking_Dates,
  
  foreignKey: "user_id",
});

Room.belongsToMany(User, {
  through: Booking_Dates,
  
  foreignKey: "room_id",
});

Booking_Dates.belongsTo(User, {
  foreignKey: "user_id",
});

Booking_Dates.belongsTo(Room, {
  foreignKey: "room_id",
});

User.hasMany(Booking_Dates, {
  foreignKey: "user_id",
});

Room.hasMany(Booking_Dates, {
  foreignKey: "room_id",
});
module.exports = { User, Room, Comment, Booking_Dates, Amenities };
