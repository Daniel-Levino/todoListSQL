module.exports = function (app) {
    const categoiria = require('../controllers/categoriasController')

    app.route('/categorias')
        .get(categoiria.listAll)
        .post(categoiria.createOne)
}