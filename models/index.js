const User = require('./User');
const Room = require('./Room');
const Comment = require('./Comment');
const Booking_Dates = require('./Booking_Dates');
const Amenities = require('./Amenities');
const Post = require('./Post');
const Vote = require('./Vote');

// associations
Room.hasMany(Comment, {
    foreignKey: 'room_id'
});

Comment.belongsTo(Room, {
    foreignKey: 'room_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
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

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Booking_Dates.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Booking_Dates, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });

  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

module.exports = { User, Room, Comment, Booking_Dates, Amenities, Vote, Post };