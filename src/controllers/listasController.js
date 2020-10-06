const Lista = require('../models').Lista

exports.listAll = (req, res) => {
    Lista.findAll().then(listas => {
        res.send(listas)
    }).catch(error => {
        res.send(error)
    })
}

exports.createOne = (req, res) => {
    const {titulo, usuarioId} = req.body

    Lista.create({titulo, usuarioId}).then(lista => {
        res.send(lista)
    }).catch(error => {
        res.send(error)
    })
}