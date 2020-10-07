

exports.listAll = (req, res) => {
    const atividades = [
        {
            descricao: "teste 1",
            dt_prevista: "2020-10-06",
            dt_execucao: "2020-10-09",
            id_lista: 1,
            id_status: 1
        },
        {
            descricao: "teste 2",
            dt_prevista: "2020-10-06",
            dt_execucao: "2020-10-09",
            id_lista: 1,
            id_status: 1
        },
        {
            descricao: "teste 3",
            dt_prevista: "2020-10-06",
            dt_execucao: "2020-10-09",
            id_lista: 1,
            id_status: 1
        }
    ]
    res.send(atividades)
}

exports.createOne = (req, res) => {
    const resposta = {
        message: "Post atividades funcionado",
        data: req.body
    }
    res.send(resposta)
}