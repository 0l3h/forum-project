'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Votes', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      votableType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      votableId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vote: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

    await queryInterface.addConstraint('Votes', {
      fields: ['votableId', 'userId'],
      type: 'unique',
      name: 'vote_unique_constraint'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Votes');

    await queryInterface.removeConstraint('Votes', 'vote_unique_constraint');
  }
};