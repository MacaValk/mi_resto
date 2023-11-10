// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     const usersData = [];
//     for (let i = 1; i <= 10; i++) {
//       const randomEmployeeId = Math.floor(1000 + Math.random() * 9000);
//       usersData.push({
//         firstName: `User${i}`,
//         las_tName: `LastName${i}`,
//         user_id: randomEmployeeId,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       });
//     }
//     return queryInterface.bulkInsert('Users', usersData);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', null, {});
//   }
//   }

 