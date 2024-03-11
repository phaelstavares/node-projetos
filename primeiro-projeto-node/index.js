const express = require("express") // importei o express no projeto
const porta = 3000
const app = express() // para facilitar coloquei o express dentro do variável 'app'
app.use(express.json()) // avisar para o express que é para usar por padrão o '.json' em vez de 'xml' e etc...

/*
    - Query params -> meusite.com/users?name=raphael&age=19     // FILTROS
    - Route params -> /users/2      // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body -> {"name": "Raphael", "age":}
*/

// primeira rota
app.get("/users", (request, response) => {
    
    const { name, age } = request.body

    console.log(request.body) // app.use(express.json())

    return response.json({ name, age })
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