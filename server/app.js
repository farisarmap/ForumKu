let express = require("express")
let app = express()
const port = 3000
const routes = require("./routes/index")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`Listen to port ${port}`)
})
