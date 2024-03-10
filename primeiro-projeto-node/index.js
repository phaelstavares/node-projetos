const express = require("express") // importei o express no projeto
const porta = 3000
const app = express() // para facilitar coloquei o express dentro do variável 'app'

/*
    - Query params -> meusite.com/users?name=raphael&age=19     // FILTROS
    - Route params -> /users/2      // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
*/

// primeira rota
app.get("/users", (request, response) => {
    const name = request.query.name
    const age = request.query.age

    console.log(name, age)

    return response.json({name: name, age: age})
})

app.listen(porta, () => {
    console.log(`🚀 Servidor online na porta ${porta}`)
}) // avisa qual porta a aplicação vai rodar (documentação do express)


/*
    quando rodar o servidor é preciso colocar 'http://localhost:3000/users' no navegador para visualizar

    para parar o servidor usa o 'ctrl + c'

    http://localhost:3000/users?name=raphael&age=19
*/