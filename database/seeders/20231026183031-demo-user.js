'use strict';

const { v4: uuidv4 } = require('uuid');
const { Users } = require('../models/user');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersData = [];
    for (let i = 1; i <= 10; i++) {
      usersData.push({
        user_id: uuidv4(), // Generar un UUID para el nuevo campo user_id
        first_name: `User${i}`,
        last_name: `LastName${i}`,
        active: true, // Opcional: Establecer el nuevo campo active
        start_date: new Date(), // Opcional: Establecer el nuevo campo start_date
        email: `user${i}@example.com`, // Opcional: Establecer el nuevo campo email
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Users', usersData, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

 