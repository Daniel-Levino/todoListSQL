const express = require('express')
const bodyParser = require('body-parser')
const { request, response } = require('express')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const routes = require('./src/routes/usuarioRoutes')
routes(app)

app.route('/')
    .get((req, res) => {
        res.send('Deu certo no metodo get')
    })
    .post((req, res) => {
        res.send('Deu certo no metodo post')
    })
    .put((req, res) => {
        res.send('Deu certo no metodo put')
    })
    .patch((req, res) => {
        res.send('Deu certo no metodo patch')
    })
    .delete((req, res) => {
        res.send('Deu certo no metodo delete')
    })
    .options((req, res) => {
        res.send('Deu certo no metodo options')
    })
    .head((req, res) => {
        res.send('Deu certo no metodo head')
    })
    
    

const port = process.env.PORT || 3001

app.listen(port)

console.log('Aplicação funcionando ', port)