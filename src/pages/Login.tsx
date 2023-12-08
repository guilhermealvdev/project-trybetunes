import { useState } from 'react';
import { createUser } from '../services/userAPI';

function Login() {
  const [textoNome, setTextoNome] = useState('');
  const [loading, setLoading] = useState(false);

  const clickedButton = async () => {
    setLoading(true);
    await createUser({ name: textoNome });
    setLoading(false);
  };
  /*
  Requisito 1:
  Explicação: O codigo está funcionando mas tive que adicionar async e await pois createUser é uma função assincrona
  Além disso, não tenho certeza do porque devo ter que passar o valor false para loading em setLoading(false) para passar no teste. (Perguntar na monitoria)
  (Será exibida alguma outra coisa e devo sumir a mensagem após a promisse ser realizada?)
  */
  return (
    <div>
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
