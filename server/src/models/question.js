'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      models.Question.belongsTo(models.User, { foreignKey: 'authorId', as: 'user' });
      models.Question.hasMany(models.Answer, { foreignKey: 'questionId', as: 'answers' });
      models.Question.hasMany(models.Vote, { foreignKey: 'votableId', as: 'votes', constraints: false, scope: { votableType: 'question' }});
    }
  }

  Question.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      questionBody: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      views_amount: DataTypes.INTEGER,
      authorId: {
        type: DataTypes.UUID,
        references: 'Users',
        key: 'id'
      }
    }, 
    {
      sequelize,
      modelName: 'Question',
    }
  );
  
  return Question;
};