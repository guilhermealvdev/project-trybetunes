import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Alv from './pages/Alv';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/user/:alv/teste" element={ <Alv /> } />
      {/* <Route path="/favorites" element={ <Favorites /> } /> */}
      {/* <Route path="/profile" element={ <Profile /> } /> */}
      {/* <Route path="/profile/edit" element={ <ProfileEdit /> } /> */}
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    // Iniciando o Projeto
  );
}

export default App;
