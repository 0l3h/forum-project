'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('Questions', 'questionBody', {
      type: Sequelize.TEXT
    });    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn('Questions', 'questionBody', {
      type: Sequelize.STRING
    });
  }
};
