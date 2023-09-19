import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import logo from '../../media/logo-kasa.png';
// affichage de l'en-tête
function Header () {
  return <header className='header-principal'>
    <Link to="/">
      <img src={logo} alt="Logo Kasa" />
    </Link><Navbar/>
  </header>;
}

export default Header;
