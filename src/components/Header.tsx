import './Header.css';
import { Link as RouterLink } from 'react-router-dom';

import logo from './header-portal.png';
import SocialNetworks from './SocialNetworks';

function Header() {
  return (
    <header className="app-header p-3">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>Mi portafolio profesional</h2>
      <nav>
        <RouterLink to="/" className="app-link">
          Sobre mí
        </RouterLink>
        <RouterLink to="/projects" className="app-link">
          Proyectos
        </RouterLink>
      </nav>
      <SocialNetworks />
    </header>
  );
}

export default Header;
