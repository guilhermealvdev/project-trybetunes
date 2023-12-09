import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';

/* Requisito 4 */

function Header() {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserName() {
      const user = await getUser();
      if (user && user.name) {
        setUserName(user.name);
      }
      setLoading(false);
    }
    fetchUserName();
  }, []);

  return (
    <header data-testid="header-component">
      <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      <div>
        {loading ? (
          <p data-testid="header-user-name">Carregando...</p>
        ) : (
          <p data-testid="header-user-name">{userName}</p>
        )}
      </div>
    </header>
  );
}

export default Header;
