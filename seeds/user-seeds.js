const { User } = require('../models');

const userData = [
  {
    first_name: 'Jason',
    last_name: 'Banks',
    email: 'jasonb5623@gmail.com',
    password: 'BigPoppy@401',
  },
  {
    first_name: 'Kim',
    last_name: 'Pane',
    email: 'prettykitty@gmail.com',
    password: 'Labradorcookie2001',
  },
  {
    first_name: 'David',
    last_name: 'Ramirez',
    email: 'drmses98513@gmail.com',
    password: 'Candylane@78445',
  },
  {
    first_name: 'Jennifer',
    last_name: 'Compley',
    email: 'j-copley4539@gmail.com',
    password: 'Sugar&Spice',
  },
  {
    first_name: 'Christopher',
    last_name: 'Roberts',
    email: 'croberts5232@gmail.com',
    password: 'Bigdoginthehouse2nite',
  },
  {
    first_name: 'Anita',
    last_name: 'Schultz',
    email: 'anitagoodtime@gmail.com',
    password: 'partygirl2112',
  },
  {
    first_name: 'Phyllis',
    last_name: 'Cameron',
    email: 'p_cameron_86@gmail.com',
    password: 'PSIloveyouforever574',
  },
  {
    first_name: 'Joe',
    last_name: 'White',
    email: 'joe_w75319@gmail.com',
    password: 'ifyouseekamy',
  },
  {
    first_name: 'Lily',
    last_name: 'Champlagne',
    email: 'jasonb5623@gmail.com',
    password: 'BigPoppy@401',
  },
  {
    first_name: 'James',
    last_name: 'Pappacogi',
    email: 'jpappacogi@gmail.com',
    password: 'IloveIcecreamForever&Ever',
  },
  {
    first_name: 'Larry',
    last_name: 'Strachenburg',
    email: 'larrystrachenburg45@gmail.com',
    password: 'IhateMondays',
  },
  {
    first_name: 'Gerorge',
    last_name: 'Cooper',
    email: 'numberoneG-dog@gmail.com',
    password: 'Alpha12Beta90',
  },
  {
    first_name: 'Candy',
    last_name: 'Simpson',
    email: 'candys876_simpson@gmail.com',
    password: 'CandyisDandybutLiquorisQuicker',
  },
  {
    first_name: 'Pat',
    last_name: 'Johnson',
    email: 'pj_johson9832@gmail.com',
    password: 'WhoLettheDogsOut?',
  },
  {
    first_name: 'Lisa',
    last_name: 'Donner',
    email: 'l_donner_7432@gmail.com',
    password: 'LoveinanElevator2',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser; 