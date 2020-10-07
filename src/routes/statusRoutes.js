module.exports = function (app) {
    const statusCont = require('../controllers/statusController')

    app.route('/status')
        .get(statusCont.listAll)
        .post(statusCont.createOne)
}