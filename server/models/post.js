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
      Post.belongsTo(models.Post)
      Post.belongsToMany(models.Reply, {
        through: "PostReply",
        foreignKey: "PostId",
      })
    }
  }
  Post.init(
    {
      UserId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      attachment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  )
  return Post
}
