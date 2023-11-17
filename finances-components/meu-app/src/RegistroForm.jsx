// src/components/RegistroForm.jsx

import React, { useState } from 'react';

const RegistroForm = () => {
  // Defina os estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Implemente a lógica de registro aqui
    // Pode ser uma chamada de API para o backend Django, por exemplo
    console.log('Registrando usuário:', { nome, email, senha });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input placeholder='nome completo...' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        <input placeholder='E-mail...' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        <input placeholder='senha...' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <br />
      <label>
        <input
          placeholder='confirmar senha...'
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroForm;
