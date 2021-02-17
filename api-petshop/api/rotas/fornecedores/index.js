const roteador = require('express').Router()

roteador.use('/', (req, resp) => {
    resp.send('Ok')
})

module.exports = roteador