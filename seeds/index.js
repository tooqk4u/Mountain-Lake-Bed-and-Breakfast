const seedUsers = require('./user-seeds');
const seedRooms = require('./room-seeds');
const SeedComments = require('./comment-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedRooms();
  console.log('--------------');

  await SeedComments()
}
seedAll();
