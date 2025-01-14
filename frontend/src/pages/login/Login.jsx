import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password) {
      setErrorMessage('Preencha todos os campos');
      return;
    }

    setErrorMessage('');

    // Lógica de autenticação (por exemplo, chamada API)
    console.log('Email:', email);
    console.log('Password:', password);

    // Após login, redirecione para a página principal ou dashboard
    navigate('/dashboard');
  };

  // Redirecionar para página de cadastro
  const handleRegister = () => {
    navigate('/register');
  };

  // Redirecionar para página de recuperação de senha
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label-email'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>

      <div className="extra-options">
        <p onClick={handleForgotPassword} className="link">
          Esqueceu sua senha?
        </p>
        <button onClick={handleRegister}>Cadastrar-se</button>
      </div>
    </div>
  );
};

export default Login;
