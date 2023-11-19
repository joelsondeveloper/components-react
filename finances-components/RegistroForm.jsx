// src/components/RegistroForm.jsx

import React, { useState } from 'react';


const RegistroForm = () => {
  // Defina os estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitarTermos, setAceitarTermos] = useState(false);
  
  

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const senhaRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/;
    
    if (!senhaRegex.test(senha)) {
      
      alert('sua senha tem que ter 6 digitos (1 numero, 1 caracter especial, 1 letra maiuscula e minusculas)') 
      
      
    }
    else if (senha !== confirmarSenha) {

      alert('digite a mesma senha nos dois campos')

    }
    else if (nome.length < 12) {
      alert('digite seu nome completo')
    }
    else if (email.length < 9) {
      alert('digite seu nome completo')
    }
    else if (!aceitarTermos) {
      alert('Você deve aceitar os termos e condições.');
    }
    else {

      // Implemente a lógica de registro aqui
    // Pode ser uma chamada de API para o backend Django, por exemplo
    console.log('Registrando usuário:', { nome, email, senha });

    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input className='inputnome' placeholder='nome completo...' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        <input className='inputemail' placeholder='E-mail...' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        <input className='inputsenha' placeholder='senha...' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <br />
      <label>
        <input
          className='inputconfirmar'
          placeholder='confirmar senha...'
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
      </label>
      <br />
      <p className='error'></p>
      <br />
      <label className='selecao'>
        
        <input
          type="checkbox"
          checked={aceitarTermos}
          onChange={() => setAceitarTermos(!aceitarTermos)}
        />
        <a href="#">Aceitar Termos e Condições</a>
        <br />
      </label>
      <button type="submit" >Registrar</button>
    </form>
  );
};

export default RegistroForm;
