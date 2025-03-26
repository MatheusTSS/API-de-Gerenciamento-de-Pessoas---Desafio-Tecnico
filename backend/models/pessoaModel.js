const getDB = require('../db');

async function getAllPessoas() { // Retorna todas as pessoas cadastradas no banco de dados.
    const db = await getDB();
    return db.all('SELECT * FROM pessoas');
}

async function getPessoaById(id) { // Retorna uma pessoa específica pelo ID.
    const db = await getDB();
    return db.get('SELECT * FROM pessoas WHERE id = ?', [id]);
}

async function createPessoa(nome, email, data_nascimento) { // Cria uma nova pessoa no banco de dados.
    const db = await getDB();
    const result = await db.run(
        'INSERT INTO pessoas (nome, email, data_nascimento) VALUES (?, ?, ?)',
        [nome, email, data_nascimento]
    );
    return { id: result.lastID, nome, email, data_nascimento };
}

async function updatePessoa(id, nome, email, data_nascimento) { // Atualiza os dados de uma pessoa pelo ID.
    const db = await getDB();
    const result = await db.run(
        'UPDATE pessoas SET nome = ?, email = ?, data_nascimento = ? WHERE id = ?',
        [nome, email, data_nascimento, id]
    );
    return result.changes > 0;
}

async function deletePessoa(id) { // Remove uma pessoa do banco de dados pelo ID.
    const db = await getDB();
    const result = await db.run('DELETE FROM pessoas WHERE id = ?', [id]);
    return result.changes > 0;
}

module.exports = { getAllPessoas, getPessoaById, createPessoa, updatePessoa, deletePessoa };