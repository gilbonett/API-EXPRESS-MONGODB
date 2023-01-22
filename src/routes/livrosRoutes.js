import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

//Definimos as rotas uma vez que foi criada essa variável para utilizar colocando o router e se você colocar esses dois pontos você consegue 
//programar o que vai acontecer na rota. Dessa rota se acontecer um .get("/livros") que já usávamos e o segundo parâmetro é o que tem que acontecer 
//quando for chamada a rota do get, vamos usar LivroController.listarLivros, isso que tem que acontecer.
router
    .get ('/livros', livroController.listarLivros)
    .get('/livros/busca', livroController.listarLivroPorEditora)
    .get ('/livros/:id', livroController.listarLivroPorId )
    .post ('/livros', livroController.cadastrarLivro)
    .put('/livros/:id', livroController.atualizarLivro)
    .delete('/livros/:id', livroController.excluirLivro)
    
    //definir rotas das mais especificas pelas menos especificas para não dar erros

export default router;