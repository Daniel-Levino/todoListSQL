module.exports = function (app) {
    app.route('/usuarios')
        .get((req, res) => {
            let usuarios = [
            {
                nome: 'Jose Carlos',
                email: 'jose.carlos@email.com'
            },
            {
                nome: 'Maria Silva',
                email: 'maria.silva@email.com'
            }
        ]
        res.send(usuarios)
    })
}