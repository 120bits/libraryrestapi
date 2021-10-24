const express = require('express')
const mountRoutes = require('./routes')
const app = express()
const port  = 9000;

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

mountRoutes(app)

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})
