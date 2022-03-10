const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Room extends Model {}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    room_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_size: {
      type: DataTypes.INTEGER,
    },
    room_description: {
      type: DataTypes.STRING
    },
    room_img: {
      type:DataTypes.STRING
    }
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: "room" }
);

module.exports = Room;
