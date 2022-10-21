'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class votes extends Model {
    static associate(models) {
      models.Vote.belongsTo(models.Question, { foreignKey: 'postId', as: 'question' });
      models.Vote.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  votes.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Vote',
    timestamps: false
  });
  return votes;
};