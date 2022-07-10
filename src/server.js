const express = require('express');
const path = require('path');
const config = require('./config')

const app = express()
const { port } = config

app.set("port", port)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use('/assets', express.static('assets'))
app.use('/assets', express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(app.get("port"));
console.log("Server running in the port: ", app.get("port"));

module.exports = app
