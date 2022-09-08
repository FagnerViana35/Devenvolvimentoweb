import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()// Roteamento do express

router
    .get("./livros/buscar", LivroController.listarLivroPorEditora)//http://localhost:3000/livros/buscar?editora=Alura
    .get("/livros", LivroController.listarLivros)//primeiro paramentro será a rota e o segundo o que acontece qdo for para essa rota
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.removerLivroPorId)
    
    
export default router;
