const express = require('express')

const app = express()

app.get('/favicon.ico', (req, res) => res.status(204))

app.use((req, res, next) => {
  console.log('in the middleware!')
  next()
})

app.use((req, res, next) => {
  console.log('in the another middleware!!!!')
  res.send('<h1>Hello from express</h1>')
})

app.listen(4000, console.log('listening on port 4000'))
