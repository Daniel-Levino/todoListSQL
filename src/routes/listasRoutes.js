module.exports = function (app) {
    const Listas = require('../controllers/listasController.js')

    app.route('/listas')
        .get(Listas.listAll)
        .post(Listas.createOne)
}