"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class PostReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostReply.belongsTo(models.Post)
      PostReply.belongsTo(models.Reply)
    }
  }
  PostReply.init(
    {
      PostId: DataTypes.INTEGER,
      ReplyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PostReply",
    }
  )
  return PostReply
}
