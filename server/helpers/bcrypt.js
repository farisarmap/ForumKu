const bcrypt = require("bcrypt")
const salt = 10

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

const checkPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword)
}

module.exports = {
  hashPassword,
  checkPassword,
}
