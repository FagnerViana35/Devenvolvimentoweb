//Aqui vai controlar os controles com get, post, put, delete
import livros from "../models/Livro.js";

class LivroController {
    //1 Rota get para lista os livros
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')//O populate é referente a primary Key e junto de tabelas
            .exec((err, livros) => {//localhost:3000// O exec tbem é pela junto da tabela .find((err, livros))
            res.status(200).json(livros);
        });
    }

    static listarLivroPorId = ( req, res) =>{
        const id = req.params.id;
        livros.findById(id)//findById(id,(err, livros) =>
            .populate('autor', 'nome')//busca o livro por nome do autorjunção de tabela
            .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            }else{
                res.status(200).send(livros)
            }
        })
    }
    //2 Rota Post insere livro na API
    static cadastrarLivro = (req, res) =>{
        const livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`})
            }else{
                res.status(201).send(livro.toJSON());
            }
        }) 
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static removerLivroPorId = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora;

        livros.find({'editora' : editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }

}
export default LivroController;

//https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb/task/103586