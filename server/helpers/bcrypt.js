const bcrypt = require("bcrypt")
const salt = 10

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

async function comparePassword(password, encryptedPassword) {
  return bcrypt.compareSync(password, encryptedPassword)
}

module.exports = {
  hashPassword,
  comparePassword,
}
