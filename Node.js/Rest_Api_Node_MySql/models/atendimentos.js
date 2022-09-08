const moment = require('moment');

const conexao = require('../infraestrutura/conexao');

class Atendimento {

    //Adicionar cliente com o metodo POST
    adicionaCliente(atendimento, result) {

        const dataCriacao = moment().format('YYYY-MM-DD HH-MM-SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual',
            },
            {
                cliente: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }

        ]

        const erros = validacoes.filter(campo => {
            !campo.valido
        })
        const existemErros = erros.length;
        
        if(existemErros){
            result.status(400).json(erros)
        } else {
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro){
                result.status(400).json(erro)
            }else{
                result.status(201).json(atendimento)
            }
            })
        }
    }

    //Lista todos os dados do json com o metodo GET
    listarCliente(result){
        const sql = 'SELECT * FROM ATENDIMENTOS'

        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                result.status(400).json(erro)
            }else{
                result.status(200).json(resultados)
            }
        })
    }

    //Buscar Cliente por ID usando o metado GET
    buscarClientePorId(id, result){
        const sql = `SELECT * FROM ATENDIMENTOS WHERE ID = ${id}`
        
        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                result.status(400).json(erro)
            }else{
                result.status(200).json(atendimento)
            }
        })
    }

    //Alterar Cliente como metodo PATCH 
    alteraCliente(id, valores, result){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }
        const sql = `UPDATE ATENDIMENTOS SET ? WHERE ID=?`
        
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                result.status(400).json(erro) 
            }else{
                result.status(200).json({...valores, id})
            }
        })
    }

    //Deletar Cliente com o o metodo Delete 
    deletarCliente(id, result){
        const sql = `DELETE  FROM ATENDIMENTOS WHERE ID = ?`
        
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                result.status(400).json(erro)
            }else{
                result.status(200).json(`O cliente número de id ${id} foi deletado`)
            }
        })
    }
}
module.exports = new Atendimento;

//npm install moment => trabalha com datas