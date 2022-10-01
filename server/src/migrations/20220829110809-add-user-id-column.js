'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'authorId', {
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Questions', 'authorId');
  }
};
