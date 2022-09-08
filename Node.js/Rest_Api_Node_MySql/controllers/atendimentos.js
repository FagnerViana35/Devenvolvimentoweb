const { request } = require('http')
const Atendimento = require('../models/atendimentos')
module.exports = app => {

    //Listar todos no json
    app.get('/atendimentos', (request, result) => {
        Atendimento.listarCliente(result)
      })

    //inserir todos no json
    app.post('/atendimentos', (request, result) => {
      const atendimento = request.body
      Atendimento.adicionaCliente(atendimento, result);
    })

    //Listar por id 
    app.get('/atendimentos/:id', (request, result) => {
    const id = parseInt(request.params.id);
    Atendimento.buscarClientePorId(id, result)  
    })
    
    //Alterar
    app.patch('/atendimentos/:id', (request, result) => {
      const id = parseInt(request.params.id);
      const valores = request.body;

      Atendimento.alteraCliente(id, valores, result);
    })

    //Deletar
    app.delete('/atendimentos/:id', (request, result) => {
       const id = parseInt(request.params.id);

       Atendimento.deletarCliente(id, result);
    })

}

//Controla as rotas 
