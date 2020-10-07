

exports.listAll = (req, res) => {
    const status_list = [
        {
            descricao: " descricao status teste 1"
        },
        {
            descricao: "descricao status teste 2"
        },
        {
            descricao: "descricao teste 3"
        }
    ]
    res.send(status_list)
}

exports.createOne = (req, res) => {
    const resposta = {
        message: "Post Status funcionando",
        data: req.body
    }
    res.send(resposta)
}