

exports.listAll = (req, res) => {
    const responde_list = [
        {
            id_usuario: 1,
            id_atividade: 3
        },
        {
            id_usuario: 2,
            id_atividade: 1
        },
        {
            id_usuario: 1,
            id_atividade: 2
        }
    ]
    res.send(responde_list)
}

exports.createOne = (req, res) => {
    const resposta = {
        message: "Post responde funcionando",
        data: req.body
    }
    res.send(resposta)
}