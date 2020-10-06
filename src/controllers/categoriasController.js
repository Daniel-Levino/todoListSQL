const Categoria = require('../models').Categoria

exports.listAll = (req,res) => {
    Categoria.findAll().then(categorias => {
        res.send(categorias)
    }).catch(error => {
        res.send(error)
    })
}

exports.createOne = (req, res) => {
    const {descricao} = req.body
    Categoria.create({descricao}).then(categoria => {
        res.send(categoria)
    }).catch(error => {
        res.send(error)
    })
}