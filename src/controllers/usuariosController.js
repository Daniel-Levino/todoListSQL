const Usuario = require("../models").Usuario

exports.listAll = (req, res) => {
	Usuario.findAll().then(usuario =>{
		res.send(usuario)
	}).catch(error => {
		res.send(error)
	})
	
}

exports.createOne = (req, res) => {
	console.log(Usuario)
	const {nome, email} = req.body
	Usuario.create({nome, email}).then(usuario =>{
		res.send(usuario)
	}).catch(error => {
		res.send(error)
	})
		
}