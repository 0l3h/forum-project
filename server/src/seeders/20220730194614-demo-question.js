const { v4: uuidv4 } = require('uuid');

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Questions', [
      {
        id: uuidv4(),
        title: "How to solve error in terminal?",
        questionBody: "I have a code which throws an error whenever I try to run this command: f | -d int. Any suggestions?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: "Error: can't find 's9f8ufkjdv-file'",
        questionBody: "When I'm trying to build a project, an error gets thrown. Can anyone help?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: "Got an Error: the unknown token 'o' in 'app.cpp' file",
        questionBody: "Can't get what's wrong with it?",
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ])
  },

  async down (queryInterface, Sequelize) {}
};
