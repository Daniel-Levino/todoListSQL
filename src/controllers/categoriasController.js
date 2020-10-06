

exports.listAll = (req,res) => {
    const caterorias = [
        {
            descricao:"urgente."
        },
        {
            descricao:"Para proxima semana."
        },
        {
            descricao:"Passar na frente."
        }
    ]
    res.send(caterorias)
}

exports.createOne = (req, res) => {
    const resposta = {
        message: "Post Categoria criado com sucesso",
        data: req.body
    }
    res.send(resposta)
}