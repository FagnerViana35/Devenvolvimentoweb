//Schema do banco
import mongoose from "mongoose";

//O que será incluido no banco
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},//Está referenciando autores e sendo chave primario
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

//nome da variavel para usar em outro arquivo
const Livros = mongoose.model('Livros', livroSchema);

export default Livros;