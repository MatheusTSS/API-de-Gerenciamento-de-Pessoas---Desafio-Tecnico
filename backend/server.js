    const express = require('express');
    const cors = require('cors');
    const pessoaRoutes = require('./routes/pessoaRoutes');

    const app = express();
    const PORT = 3000;

    app.use(express.json()); // Middleware para permitir o uso de JSON nas requisições.
    app.use(cors()); // Middleware para habilitar o CORS 
    app.use('/api', pessoaRoutes); // Definição das rotas da API.

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`); 
    });