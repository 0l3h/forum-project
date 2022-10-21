'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'views_amount', { 
      type: Sequelize.INTEGER,
      allowNull: false, 
      defaultValue: 0
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Questions', 'views_amount');
  }
};