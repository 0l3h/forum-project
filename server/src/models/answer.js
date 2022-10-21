'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      models.Answer.belongsTo(models.Question, { foreignKey: 'questionId', as: 'question' });
      models.Answer.belongsTo(models.User, { foreignKey: 'authorId', as: 'user' });
    }
  }
  Answer.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    answerBody: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    votesAmount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    questionId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};