const User = require('./User');
const Room = require('./Room');
const Comment = require('./Comment');
const Booking_Dates = require('./Booking_Dates');
const Amenities = require('./Amenities');

// associations
// Room.hasMany(Comment, {
//     foreignKey: 'room_id'
// });

// Comment.hasMany(Room, {
//     foreignKey: 'room_id'
// });

Room.hasMany(Amenities, {
    foreignKey: 'room_id'
});

Amenities.belongsTo(Room, {
    foreignKey: 'room_id'
});

module.exports = { User, Room, Comment, Booking_Dates, Amenities };