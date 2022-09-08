//Criação de app com Express
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

//Conexão com o banco e erro
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", ()=>{
    console.log('Conexão com o banco feita com sucesso')
})

//2 tem que ter uma instancia do express
const app = express();
//Faz interpretar tudo que chegar via posto ou put e tranformar em um objeto 
app.use(express.json());
//Pegando dados do Index.js da constante ROUTES
routes(app);

export default app;

