'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'about', {
      type: Sequelize.TEXT,
    });

    await queryInterface.addColumn('Users', 'profilePictureUrl', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'about');
    await queryInterface.removeColumn('Users', 'profilePictureUrl');
  }
};