import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router()// Roteamento do express

router
    .get("/autores", AutorController.listarAutores)//primeiro paramentro será a rota e o segundo o que acontece qdo for para essa rota
    .get("/autores/:id", AutorController.listarAutoresPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.removerAutorPorId)
    
export default router;