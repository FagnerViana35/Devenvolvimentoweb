const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () =>{
  const app = express();

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true})) 
  

  consign()
    .include('controllers')
    .into(app)

    return app
}

//Configurar qualquer coisa dentro do express para exibir no postman 
//npm install consign
//npm install body-parser
//Curl
//npm install mysql
