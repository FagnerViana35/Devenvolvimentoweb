const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json())//pega todos os dados que vier pelo app.use e transforma em json

const port = 3000;

app.get('/teste', (request, response) => {
    response
    .status(200)
    .send({message: 'boas-vindas'});
})

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app;

//npm init -y
//npm install body-parser
//npm install express
//npm install nodemon --save-dev
//npm install mysql2
//npm install sequelize sequelize-cli path
//npx sequelize-cli init ->https://sequelize.org/docs/v6/other-topics/migrations/