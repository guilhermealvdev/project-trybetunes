import { useState, useEffect } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

/*
Requisito 2 - Atualização de Progresso
*/

function Search() {
  const [valorTexto, setValorTexto] = useState('');
  const [loading2, setLoading2] = useState(false);
  const [retorno, setRetorno] = useState<AlbumType[]>([]);

  useEffect(() => {
    console.log(retorno);
  }, [retorno]);

  const buttonPesquisar = async () => {
    setLoading2(true);
    const resp = await searchAlbumsAPI(valorTexto);
    setValorTexto('');
    setLoading2(false);
    setRetorno(resp);
  };

  return (
    <div>
      <h1>Search</h1>
      <form action="">
        <input
          type="text"
          data-testid="search-artist-input"
          value={ valorTexto }
          onChange={ (e) => setValorTexto(e.target.value) }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ valorTexto.length < 2 }
          onClick={ buttonPesquisar }
        >
          Pesquisar
        </button>
      </form>
      { loading2 && (
        <p>
          Carregando...
        </p>
      )}
    </div>
  );
}

export default Search;
