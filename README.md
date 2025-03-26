<h1>API de Gerenciamento de Pessoas</h1>
    
<h2>Sobre</h2>
<p>A API de Gerenciamento de Pessoas é uma solução para o cadastro, consulta, edição e exclusão de registros de pessoas em um banco de dados. Desenvolvida com <strong>Node.js</strong> e <strong>Express</strong>, a API adota uma arquitetura modular baseada em camadas, garantindo organização e escalabilidade ao separar responsabilidades entre rotas, controladores e modelos.</p>  

<p>Para complementar a experiência do usuário, a aplicação conta com um frontend dinâmico e responsivo, desenvolvido em <strong>React</strong> com <strong>TailwindCSS</strong>. Essa interface facilita a interação com os dados da API, proporcionando uma navegação intuitiva e eficiente.</p>  



    
<h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Node.js</strong> (Backend);</li>
        <li><strong>Express.js</strong> (Framework para o Node.js);</li>
        <li><strong>SQLite</strong> (Banco de Dados);</li>
        <li><strong>React</strong> (Frontend);</li>
        <li><strong>TailwindCSS</strong> (Estilização do frontend).</li>
    </ul>

<h2>Requisitos</h2>
<ul>
    <li><strong>Node.js</strong> instalado na máquina.</li>
    <li><strong>Gerenciador de pacotes npm.</strong>/</li>
</ul>
    
<h2>Instalação</h2>
    <ol>
        <li>Clone o repositório:</li>
        <code>git clone https://github.com/MatheusTSS/API-de-Gerenciamento-de-Pessoas---Desafio-Tecnico</code>
        <li>Entre nos diretórios do projeto (um por vez):</li>
        <code>cd backend</code>
        <code>cd frontend</code>
        <li>Instale as dependências em cada reposítorio:</li>
        <code>npm install</code>
        <li>Inicie o servidor backend e frontend:</li>
        <code>npm run dev</code>
        <li>Acesse o frontend em: <code>http://localhost:5173/</code></li>
        <li>O backend estará disponível em: <code>http://localhost:3000/</code></li>
    </ol>
    
<h2>Endpoints</h2>
    <h3>Criar uma pessoa</h3>
    <p><strong>POST</strong> <code>/pessoas</code></p>
    <h3>Listar todas as pessoas</h3>
    <p><strong>GET</strong> <code>/pessoas</code></p>
    <h3>Buscar uma pessoa pelo ID</h3>
    <p><strong>GET</strong> <code>/pessoas/:id</code></p>
    <h3>Atualizar uma pessoa</h3>
    <p><strong>PUT</strong> <code>/pessoas/:id</code></p>
    <h3>Deletar uma pessoa</h3>
    <p><strong>DELETE</strong> <code>/pessoas/:id</code></p>
    
  <h2>Autor</h2>
    <p>Matheus Tadeu Souza Santos</p>
    <p>Para dúvidas ou sugestões, entre em contato pelo LinkedIn: <a href="http://linkedin.com/in/matheustss/" target="_blank">http://linkedin.com/in/matheustss/</a></p>
</html>
