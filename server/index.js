const express = require('express')
const routes = require('./routes/routes.js')

const server = express()

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json')
    next();
});

server.use('/api/cars', routes)

server.use(function(err, req, res, nex) {
    res.status(err.statusCode).send(err.message)
})

const PORT = 6650 //Math.round(Math.random() * 1000)

server.listen(PORT, () => {
    console.log(`Listeneing to port: ${PORT}.`)
})