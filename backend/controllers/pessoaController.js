const Pessoa = require('../models/pessoaModel');

async function listarPessoas(req, res) { // Lista todas as pessoas registradas no banco de dados.
    const pessoas = await Pessoa.getAllPessoas();
    res.json(pessoas);
}

async function obterPessoa(req, res) { // Obtém uma pessoa específica pelo ID fornecido.
    const pessoa = await Pessoa.getPessoaById(req.params.id);
    pessoa ? res.json(pessoa) : res.status(404).json({ error: 'Pessoa não encontrada' });
}

async function criarPessoa(req, res) { // Cria uma nova pessoa com os dados fornecidos no corpo da requisição.
    try {
        const novaPessoa = await Pessoa.createPessoa(req.body.nome, req.body.email, req.body.data_nascimento);
        res.status(201).json(novaPessoa);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function atualizarPessoa(req, res) { // Atualiza os dados de uma pessoa existente pelo ID fornecido.
    const sucesso = await Pessoa.updatePessoa(req.params.id, req.body.nome, req.body.email, req.body.data_nascimento);
    sucesso ? res.json({ message: 'Pessoa atualizada com sucesso' }) : res.status(404).json({ error: 'Pessoa não encontrada' });
}

async function deletarPessoa(req, res) { // Deleta uma pessoa do banco de dados pelo ID fornecido.
    const sucesso = await Pessoa.deletePessoa(req.params.id);
    sucesso ? res.json({ message: 'Pessoa deletada com sucesso' }) : res.status(404).json({ error: 'Pessoa não encontrada' });
}

module.exports = { listarPessoas, obterPessoa, criarPessoa, atualizarPessoa, deletarPessoa };