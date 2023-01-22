import express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log('Conexão do banco feita com sucesso')
})

const app = express();
/* app.use(Express.json()) que é um recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular. */
app.use(express.json())
routes(app);


export default app