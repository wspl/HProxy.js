var express = require('express')
var app = express()

app.all('*', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 5000)