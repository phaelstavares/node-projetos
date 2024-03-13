const express = require("express") // importei o express no projeto
const uuid = require("uuid")

const porta = 3000
const app = express() // para facilitar coloquei o express dentro do variável 'app'
app.use(express.json()) // avisar para o express que é para usar por padrão o '.json' em vez de 'xml' e etc...

/*
    - Query params -> meusite.com/users?name=raphael&age=19     // FILTROS
    - Route params -> /users/2      // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body -> { "name": "Raphael", "age":19 }

    - GET          -> Busca informação no back-end
    - POST         -> Cria informação no back-end
    - PUT / PATCH  -> Alterar/Atualizar informações no back-end
    - DELETE       -> Deletar informações no back-end
*/

const users = [] // nunca vamos utilizar variável, foi somente para métodos didáticos (se o servidor for reiniciado, os dados são perdidos)

app.get("/users", (request, response) => {
    return response.json(users)
})

app.post("/users", (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name: name, age: age }

    users.push(user)

    return response.status(201).json(user)
})

app.put("/users/:id", (request, response) => {
    const { id } = request.params
    const { name, age } = request.body

    const updateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)

    if(index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    users[index] = updateUser

    return response.json(updateUser)
})

app.delete("/users/:id", (request, response) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if(index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    users.splice(index, 1)

    return response.status(204).json()
})



app.listen(porta, () => {
    console.log(`🚀 Servidor online na porta ${porta}`)
}) // avisa qual porta a aplicação vai rodar (documentação do express)

/*
    quando rodar o servidor é preciso colocar 'http://localhost:3000/users' no navegador para visualizar

    para parar o servidor usa o 'ctrl + c'

    http://localhost:3000/users?name=raphael&age=19

    npm run dev - o servidor começa a rodar ('dev' é o nome dado em 'package.json')
*/