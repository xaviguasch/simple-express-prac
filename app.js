const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/favicon.ico', (req, res) => res.status(204)) // boilerplate code, conflict with favicon

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  )
})

app.use('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h1>')
})

app.listen(4000, console.log('listening on port 4000'))
