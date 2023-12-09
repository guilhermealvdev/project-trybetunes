import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';

interface AlbumInfo {
  artistName: string;
  collectionName: string;
}

interface Music {
  trackId: number;
  trackName: string;
  previewUrl: string;
}

/* Requisito 3 */

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState({});
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const fetchAlbumInfo = async () => {
      const [albumData, ...musicsData]: [AlbumInfo, ...Music[]] = await getMusics(id);
      setAlbumInfo(albumData);
      setMusicList(musicsData);
      setLoading(false);
    };

    fetchAlbumInfo();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p data-testid="loading-message">Carregando...</p>
      ) : (
        <div>
          <h2 data-testid="artist-name">{albumInfo.artistName}</h2>
          <h1 data-testid="album-name">{albumInfo.collectionName}</h1>
          <ul>
            {musicList.map((music) => (
              <li key={ music.trackId } data-testid={ `music-${music.trackId}` }>
                <p>{music.trackName}</p>
                <audio controls data-testid="audio-component">
                  <track kind="captions" />
                  <source src={ music.previewUrl } type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Album;
