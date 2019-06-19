const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.get('/favicon.ico', (req, res) => res.status(204)) // boilerplate code, conflict with favicon

app.use(bodyParser.urlencoded({ extended: true }))

app.use(adminRoutes)

app.use(shopRoutes)

app.listen(4000, console.log('listening on port 4000'))
