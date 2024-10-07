// src/ForgotPassword.js

import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Por favor, insira seu email');
      return;
    }

    setMessage('Um email de recuperação foi enviado para o endereço fornecido.');

    // Aqui, você faria a chamada para a API de recuperação de senha
    console.log('Recuperação de senha para o email:', email);
  };

  return (
    <div className="forgot-password-container">
      <h2>Esqueci Minha Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <button type="submit">Recuperar Senha</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
