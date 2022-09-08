const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) =>{
    if(erro){
        console.log(`Erro de conexão: ${erro}`)
    }else{
        console.log("Conectado com sucesso");
        
        Tabelas.init(conexao);

        const app = customExpress();
        
        app.listen(3000, () =>{
        console.log("Servidor rodando na porta 3000");
})
    }
})



//https://www.npmjs.com/package/express a função da linha 4 foi retirada daqui
//Subir nosso arquivo no ar