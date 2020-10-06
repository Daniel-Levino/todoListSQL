const Usuario = require("../models").Usuario

exports.listAll = (req, res) => {
	Usuario.findAll().then(usuarios =>{
		res.send(usuarios)
	}).catch(error => {
		res.send(error)
	})
	
}

exports.createOne = (req, res) => {
	const {nome, email, senha} = req.body
	Usuario.create({nome, email, senha}).then(usuario =>{
		res.send(usuario)
	}).catch(error => {
		res.send(error)
	})
		
}