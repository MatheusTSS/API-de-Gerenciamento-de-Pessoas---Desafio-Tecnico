const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

let db;
(async () => { // Abre conexão com o banco de dados SQLite
    db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });
    // Cria a tabela "pessoas" caso ela não exista
    await db.exec(`CREATE TABLE IF NOT EXISTS pessoas ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        data_nascimento TEXT NOT NULL
    )`);
})();

module.exports = () => db;