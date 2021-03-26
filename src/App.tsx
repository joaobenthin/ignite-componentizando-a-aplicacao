import { SideBar } from './components/SideBar';
import { Content, GenreResponseProps } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useEffect, useState } from 'react';
import { api } from './services/api';

export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });    
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>      
      <SideBar genres={genres} selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content selectedGenreId={selectedGenreId} />      
    </div>
  )
}