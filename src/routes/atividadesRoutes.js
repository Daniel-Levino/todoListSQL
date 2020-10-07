module.exports = function (app) {
    const atividade = require('../controllers/atividadesController')

    app.route('/atividades')
        .get(atividade.listAll)
        .post(atividade.createOne)
}