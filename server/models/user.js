"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "UserId",
      })
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Must be email format!",
          },
          notEmpty: {
            msg: "Cannot be empty!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 4,
          notEmpty: {
            msg: "Cannot be empty!",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Cannot be empty!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
