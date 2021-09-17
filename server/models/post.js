"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
      Post.belongsToMany(models.Reply, {
        through: models.PostReply,
        foreignKey: "PostId",
      })
    }
  }
  Post.init(
    {
      content: DataTypes.STRING,
      attachment: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  )
  return Post
}