import React, { useState } from "react";

//  Componente que exibe as informações de uma pessoa e permite edição ou remoção.

const PessoaItem = ({ pessoa, onEdit, onRemove }) => {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return ( 
      <div className="bg-blue-50 shadow-md rounded-lg p-4 mb-4"> 
        <input 
          type="text"
          className="border rounded p-2 mb-3 w-full focus:ring-2 focus:ring-blue-400"
          defaultValue={pessoa.nome}
          onBlur={(e) => onEdit(pessoa.id, e.target.value, pessoa.email, pessoa.data_nascimento)}
        />
        <input
          type="email"
          className="border rounded p-2 mb-3 w-full focus:ring-2 focus:ring-blue-400"
          defaultValue={pessoa.email}
          onBlur={(e) => onEdit(pessoa.id, pessoa.nome, e.target.value, pessoa.data_nascimento)}
        />
        <input
          type="date"
          className="border rounded p-2 mb-3 w-full focus:ring-2 focus:ring-blue-400"
          defaultValue={pessoa.data_nascimento}
          onBlur={(e) => onEdit(pessoa.id, pessoa.nome, pessoa.email, e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white p-2 rounded w-1/3 hover:bg-green-600 transition duration-300"
            onClick={() => setEdit(!edit)}
          >
            Salvar
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
        <div className="mb-2">
          <span className="font-semibold">Nome: </span>{pessoa.nome}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email: </span>{pessoa.email}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Data de nascimento: </span>
          {pessoa.data_nascimento.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white p-2 rounded w-1/3 hover:bg-blue-600 transition duration-300"
            onClick={() => setEdit(!edit)}
          >
            Editar
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded w-1/3 hover:bg-red-600 transition duration-300"
            onClick={() => onRemove(pessoa.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    );
  }
};

export default PessoaItem;