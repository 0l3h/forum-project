'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

  class votes extends Model {
    static associate(models) {
      models.Vote.belongsTo(models.Question, { foreignKey: 'votableId', as: 'question', constraints: false });
      models.Vote.belongsTo(models.User, { foreignKey: 'votableId', as: 'user', constraints: false });
    }

    getVotable(options) {
      if(!this.votableType){
        return Promise.resolve(null);
      }

      const mixinMethodName = `get${uppercaseFirst(this.votableType)}`;

      return this[mixinMethodName](options);
    }
  }

  votes.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    votableType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    votableId: {
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

  votes.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) {
      findResult = [findResult];
    }

    for (const instance of findResult) {
      if (instance.votableType === "question" && instance.question !== undefined) {
        instance.votable = instance.question;
      } 
      else if (instance.votableType === "answer" && instance.answer !== undefined) {
        instance.votable = instance.answer;
      }

      delete instance.question;
      delete instance.defaultValues.question;
      delete instance.answer;
      delete instance.dataValues.answer;
    }
  });

  return votes;
};