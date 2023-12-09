import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [textoNome, setTextoNome] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const clickedButton = async () => {
    setLoading(true);
    await createUser({ name: textoNome });
    setLoading(false);
    navigate('/search');
  };
  /*
  Requisito 1 - Completado!
  */
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input
          data-testid="login-name-input"
          type="text"
          value={ textoNome }
          onChange={ (e) => setTextoNome(e.target.value) }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ textoNome.length < 3 }
          onClick={ clickedButton }
        >
          Entrar
        </button>
      </form>
      { loading && (
        <p>
          Carregando...
        </p>
      )}

    </div>
  );
}

export default Login;
