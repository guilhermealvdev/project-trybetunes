import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Alv from './pages/Alv';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/user/:alv/teste" element={ <Alv /> } />
        {/* <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/profile/edit" element={ <ProfileEdit /> } /> */}
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

// Requisitos 5 e Bonus a serem feitos

export default App;
