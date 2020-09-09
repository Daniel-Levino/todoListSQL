// cria uma instâcia do express para a aplicação
const express = require('express')

 // importa modulo capas de pegar o corpo de uma requisição
 // e formata em qualquer formato (no caso json)
const bodyParser = require('body-parser')
const { request, response } = require('express')

// Essa é a variável que representa o app
const app = express()

// permite que reconheça o objeto como string ou matriz,
// necessário passar o id pela rota e interpretar prametros de 
// rota e requisição
app.use(bodyParser.urlencoded({extended:true}))

// metodo que será trabalhado (no caso json)
app.use(bodyParser.json())

//
const routes = require('./src/routes/usuariosRoutes')

routes(app)

app.route('/')
    .get((req, res) => {
        res.send("API TodoList FICR Funcionando")
    })
    
const port = process.env.PORT || 3005 // porta que deverá rodar a aplicação

app.listen(port)

console.log('Aplicação funcionando ', port)