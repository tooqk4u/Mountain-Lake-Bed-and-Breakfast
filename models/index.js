const User = require('./User');
const Room = require('./Room');
const Comment = require('./Comment');
const Booking_Dates = require('./Booking_Dates');
const Amenities = require('./Amenities');

// associations
Room.hasMany(Comment, {
    foreignKey: 'room_id'
});

User.hasMany(Comment,{
    foreignKey:'user_id'
})

Comment.belongsTo(Room, {
    foreignKey: 'room_id',
    
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    
});





Room.hasMany(Amenities, {
    foreignKey: 'room_id'
});

Amenities.belongsTo(Room, {
    foreignKey: 'room_id'
});

Room.belongsToMany(User, {
    through: 'booking_dates',
    as: 'booking_date',
    foreignKey: 'room_id'
});

User.belongsToMany(Room, {
    through: 'booking_dates',
    as: 'room_booking',
    foreignKey: 'user_id'
});



Booking_Dates.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Booking_Dates, {
    foreignKey: 'user_id'
});

module.exports = { User, Room, Comment, Booking_Dates, Amenities };