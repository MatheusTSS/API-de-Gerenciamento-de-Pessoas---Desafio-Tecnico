import React, { useState } from "react";

//  Componente que cadastra uma pessoa.

const PessoaForm = ({ nome, setNome, email, setEmail, dataNascimento, setDataNascimento, onAdd }) => {
  const [errors, setErrors] = useState({}); // Estado para armazenar erros

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email
    return regex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!validarEmail(email)) {
      newErrors.email = "Email inválido";
    }
    if (!dataNascimento.trim()) newErrors.dataNascimento = "Data de nascimento é obrigatória";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAdd(); // Se não houver erros, adiciona a pessoa
    }
  };

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-black text-center mb-4">Cadastro de Pessoas</h2>

      <div className="mb-4">
      <label htmlFor="nome" className="font-semibold">
          Nome Completo
        </label>
        <input
          type="text"
          className={`border rounded p-2 w-full ${errors.nome ? "border-red-500" : ""}`}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome completo da pessoa"
        />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
      </div>

      <div className="mb-4">
      <label htmlFor="email" className="font-semibold">
          E-mail
        </label>
        <input
          type="email"
          className={`border rounded p-2 w-full ${errors.email ? "border-red-500" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o e-mail da pessoa"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="dataNascimento" className="font-semibold">
          Data de Nascimento
        </label>
        <input
          id="dataNascimento"
          type="date"
          className={`border rounded p-2 w-full ${errors.dataNascimento ? "border-red-500" : ""}`}
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        {errors.dataNascimento && <p className="text-red-500 text-sm">{errors.dataNascimento}</p>}
      </div>

      <button className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer" onClick={handleSubmit}>
        Cadastrar
      </button>
    </div>
  );
};

export default PessoaForm;
