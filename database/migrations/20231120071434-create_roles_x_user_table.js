'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('roles_x_user', {
       roles_x_user_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
     },
     userId: {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'user_id',
      }
    },
    roleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'rol_id',
      },
  }
})

     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles_x_user');
  }
};
