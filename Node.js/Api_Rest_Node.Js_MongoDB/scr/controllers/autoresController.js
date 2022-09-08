import autores from "../models/Autor.js";


class AutorController {

    //1 Rota get para lista os autores
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {//localhost:3000
            res.status(200).json(autores);
        });
    }

    static listarAutoresPorId = ( req, res) =>{
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
            }else{
                res.status(200).send(autores)
            }
        })
    }
    //2 Rota Post insere autor na API
    static cadastrarAutor = (req, res) =>{
        const autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.`})
            }else{
                res.status(201).send(autor.toJSON());
            }
        }) 
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static removerAutorPorId = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}
export default AutorController;