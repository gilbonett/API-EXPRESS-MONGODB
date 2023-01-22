// sempre é bom colocar a extensão do arquivo para evitar erros nas rotas
import app from "./src/app.js";


// a porta não sempre vai ser local, é uma boa pratica fazer um condicional process.env.PORT pq sera a porta que sera escutada no servidor. Ficara a porta no ambiente de produção ou a fixa no caso 8080
const porta = process.env.PORT || 8080;

//no package.json deve de adicionar "type": "module", para poder usar import e export
app.listen(porta, () => {
    console.log(`Servidor escutando em http://localhost:${porta}`)
})