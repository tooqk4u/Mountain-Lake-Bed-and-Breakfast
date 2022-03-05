const { Room } = require('../models');

const roomData = [
  {
    room_name: "Mountain Sierra Suite",
    room_number: 101,
    room_price: 700,
    room_size: 500,
  },
  {
    room_name: "Candlewood Lake Suite",
    room_number: 201,
    room_price: 900,
    room_size: 600,
  },
  {
    room_name: "Misty Mountain Deluxe Room",
    room_number: 103,
    room_price: 300,
    room_size: 300,
  },
  {
    room_name: "Lake Shasta Deluxe Room",
    room_number: 203,
    room_price: 300,
    room_size: 300,
  },
  {
    room_name: "Lake Tahoe",
    room_number: 105,
    room_price: 200,
    room_size: 250,
  },
  {
    room_name: "Lake Derby",
    room_number: 205,
    room_price: 200,
    room_size: 250,
  },
  {
    room_name: "Mount Washington",
    room_number: 106,
    room_price: 200,
    room_size: 250,
  },
  {
    
    room_name: "Mount Charleston",
    room_number: 206,     
    room_price: 200,
    room_size: 250,
  },
  {
    room_name: "Standard",
    room_number: 107,
    room_price: 200,
    room_size: 200,
  },
  {
    room_name: "Standard",
    room_number: 207,
    room_price: 200,
    room_size: 200,
  },
];


const seedRoom = () => Room.bulkCreate(roomData);

module.exports = seedRoom;

    