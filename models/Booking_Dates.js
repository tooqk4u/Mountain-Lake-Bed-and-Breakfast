const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// TODO - add validation to dates- end should be greater than start, start should be less than end, start should be after current date
class Booking_Dates extends Model {}

Booking_Dates.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    room_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "room",
            key: 'id'
        }
    },

    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date:{
        type: DataTypes.DATE,
        allowNull:false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "booking_dates",
  }
);

module.exports = Booking_Dates;
