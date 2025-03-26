import React, { useState, useEffect } from "react";
import axios from "axios";
import PessoaItem from "../components/PessoaItem";
import PessoaForm from "../components/PessoaForm";

// Componente principal para gerenciar a lista de pessoas.

const Pessoas = () => {
    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    useEffect(() => {
        fetchPessoas();
    }, []);

    const fetchPessoas = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/pessoas");
            setPessoas(response.data);
        } catch (error) {
            console.error("Erro ao buscar pessoas", error);
        }
    };

    const adicionarPessoa = async () => {
        if (!nome.trim() || !email.trim() || !dataNascimento.trim()) return;
        try {
            await axios.post("http://localhost:3000/api/pessoa", { nome: nome, email: email, data_nascimento: dataNascimento });
            setNome("");
            setEmail("");
            setDataNascimento("")
            fetchPessoas();
        } catch (error) {
            console.error("Erro ao adicionar pessoa", error);
        }
    };

    const editarPessoa = async (id, nome, email, dataNascimento) => {
        if (!nome.trim() || !email.trim() || !dataNascimento.trim()) return;
        try {
            await axios.put(`http://localhost:3000/api/pessoa/${id}`, { nome: nome, email: email, data_nascimento: dataNascimento });
            fetchPessoas();
        } catch (error) {
            console.error("Erro ao editar pessoa", error);
        }
    };

    const confirma = async () => {
        return confirm('Deseja realmente excluir essa pessoa?')       
    } 

    const removerPessoa = async (id) => {
        let confirmacao = await confirma()        
        if (confirmacao){
            try {
                await axios.delete(`http://localhost:3000/api/pessoa/${id}`);
                fetchPessoas();
            } catch (error) {
                console.error("Erro ao remover pessoa", error);
            }
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <PessoaForm
                nome={nome}
                setNome={setNome}
                email={email}
                setEmail={setEmail}
                dataNascimento={dataNascimento}
                setDataNascimento={setDataNascimento}
                onAdd={adicionarPessoa}
            />
         <hr />
            <div className="my-3">
            <h1 className="text-center font-bold text-xl mb-3">Lista de Pessoas Adicionadas</h1>
                {pessoas.map((pessoa) => (
                    <PessoaItem
                        key={pessoa.id}
                        pessoa={pessoa}
                        onEdit={editarPessoa}
                        onRemove={removerPessoa}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pessoas;
