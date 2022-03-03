const { Model, DataTypes, BOOLEAN } = require("sequelize");
const sequelize = require("../config/connection");

class Amenities extends Model {}

Amenities.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bed_size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  view_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  smoking: {
    type: BOOLEAN,
    allowNull: false,
  },
  continental_breakfast: {
    type: BOOLEAN,
    allowNull: false,
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "amenities",
},

);

module.exports = Amenities;