const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.get('/pessoas', pessoaController.listarPessoas); // Rota para listar todas as pessoas.
router.get('/pessoa/:id', pessoaController.obterPessoa); // Rota para obter uma pessoa específica pelo ID.
router.post('/pessoa', pessoaController.criarPessoa); // Rota para criar uma nova pessoa.
router.put('/pessoa/:id', pessoaController.atualizarPessoa); // Rota para atualizar os dados de uma pessoa pelo ID.
router.delete('/pessoa/:id', pessoaController.deletarPessoa); // Rota para deletar uma pessoa pelo ID.

module.exports = router;