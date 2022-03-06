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
 Amenity_type: {
    type: DataTypes.STRING,
    allowNull: false    
  }
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "amenities",
},

);

module.exports = Amenities;