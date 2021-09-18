const { User } = require("../models/index")

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, name } = req.body
      const user = await User.create({ email, password, name })
      res.status(201).json({
        id: user.id,
        email: user.email,
      })
    } catch (err) {
      console.log(err)
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email,
          password: password,
        },
      })
      console.log(user)
      if (!user) {
        res.status(404).json({
          msg: "Email or Password invalid!",
        })
      } else {
        res.status(200).json({
          msg: `${user.name} logged in!`,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = UserController
