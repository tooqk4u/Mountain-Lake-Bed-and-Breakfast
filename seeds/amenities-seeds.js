const { Amenities } = require("../models");

const amenitiesData = [
  {
    bed_size: "King",
  },
  {
    bed_size: "Queen",    
  },
  {
    bed_size: "Double",
  },
  {
    view_type: "Mountain",
  },
  {
    view_type: "Lake",    
  },
  {
    smoking: true,    
  },
  {
    continental_breakfast: true,
  },
];

const seedAmenities = () => Amenities.bulkCreate(amenitiesData);

module.exports = seedAmenities; 