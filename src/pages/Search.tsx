import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

/*
Requisito 2 - Completado!
*/

function Search() {
  const [valorTexto, setValorTexto] = useState('');
  const [loading2, setLoading2] = useState(false);
  const [retorno, setRetorno] = useState<AlbumType[]>([]);
  const [artistaPesquisado, setArtistaPesquisado] = useState('');

  useEffect(() => {
    console.log(retorno);
  }, [retorno]);

  const buttonPesquisar = async () => {
    setLoading2(true);
    const resp = await searchAlbumsAPI(valorTexto);
    setArtistaPesquisado(valorTexto);
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
      { /* Resultados */ }
      {retorno.length > 0 ? (
        <div>
          <h2>
            {`Resultado de álbuns de: ${artistaPesquisado}`}
          </h2>
          <ul>
            {retorno.map((album) => (
              <li key={ album.collectionId }>
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nenhum álbum foi encontrado</p>
      )}
    </div>
  );
}

export default Search;
