import app from "./scr/app.js";
//Criando servidor local

//Porta onde o servidor vai rodar(É uma condicional pois servidor pode ser local ou mandando para outro servidor)
const port = process.env.PORT || 3000;
//Exibe os dados inserido no terminal(Servidor irá escutar)
app.listen(port, () => {
    console.log(`Servidor escutando na porta httt//localhost:${port}`);
});

//1 - npm install nodemon@2.0.15 -D -> baixar o Nodemon para fazer um liveReloud vai identificar que vai fazer o reloud e conseguir vizializar, tenho que alterar no package.json 
//2 - npm i chalk irá alterar as cores do erros
//3 - npm install express@4.17.3 - https://expressjs.com/en/starter/installing.html

//MongoDB

//1 - Não relacionou
//2 - Orientado a Documento
//3 - Mesma estrutura de dados nativamente 
//4 - banco de dados NoSQL