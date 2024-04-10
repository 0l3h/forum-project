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
      },
      {
        id: uuidv4(),
        title: 'Help needed. I have a problem in generating a zip file', 
        questionBody: 'I have some problems when trying to creat a zip file. Could you please help me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Erro: unknown location when writing python code', 
        questionBody: 'There is a file which I am trying to read with python but get this error',
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ])
  },

  async down (queryInterface, Sequelize) {}
};
