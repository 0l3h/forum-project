'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Question, { foreignKey: 'authorId', as: 'questions' });
      models.User.belongsToMany(models.Question, { through: 'questions_votes', unique: false, foreignKey: 'userId', otherKey: 'questionId'});
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    about: {
      type: DataTypes.TEXT,
    },
    profilePictureUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};