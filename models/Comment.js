const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      
      references: {
        model: "user",
        key: "id",
      },
    },
    room_id: {
      type: DataTypes.INTEGER,
      
      references: {
        model: "room",
        key: "id",
      },
    },
    comment_text: {
      type: DataTypes.TEXT,
    },
  },

  { sequelize, freezeTableName: true, underscored: true, modelName: "comment" }
);
module.exports = Comment;
