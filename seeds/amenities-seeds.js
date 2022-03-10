const { Amenities } = require("../models");

const amenitiesData = [
  {
    amenity_type: "bed size: King",
  },
  {
    amenity_type: "bed size: Queen",
  },
  {
    amenity_type: "bed size: Double",
  },
  {
    amenity_type: "view: Mountain",
  },
  {
    amenity_type: "view Lake",
  },
  {
    amenity_type: " smoking",
  },
  {
    amenity_type: "continental breakfast",
  },
];

const seedAmenities = () => Amenities.bulkCreate(amenitiesData);

module.exports = seedAmenities;
