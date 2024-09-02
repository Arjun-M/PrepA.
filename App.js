const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )
app.use( express.static("PrepA/Template") )
app.set('views', path.join(__dirname, "/PrepA/Template"))

app.use('/', require('./PrepA/Server/Router.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
