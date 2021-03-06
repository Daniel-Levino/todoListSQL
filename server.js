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
const usuariosRoutes = require('./src/routes/usuariosRoutes')
const listasRoutes = require('./src/routes/listasRoutes')
const categoriaRoutes = require('./src/routes/categoriasRoutes')
const atividadesRoutes = require('./src/routes/atividadesRoutes')
const statusRoutes = require('./src/routes/statusRoutes')
const respondeRoutes = require('./src/routes/respondeRoutes')

listasRoutes(app)
usuariosRoutes(app)
categoriaRoutes(app)
atividadesRoutes(app)
statusRoutes(app)
respondeRoutes(app)

app.route('/')
    .get((req, res) => {
        res.send("API TodoList FICR Funcionando")
    })
    
const port = process.env.PORT || 3000 // porta que deverá rodar a aplicação

app.listen(port)

console.log('Aplicação funcionando ', port)