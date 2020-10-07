module.exports = function (app) {
    const respondeCont = require('../controllers/respondeController')

    app.route('/responde')
        .get(respondeCont.listAll)
        .post(respondeCont.createOne)
}