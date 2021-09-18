const router = require("express").Router()
const UserRoutes = require("./User")

router.use("/users", UserRoutes)

module.exports = router
