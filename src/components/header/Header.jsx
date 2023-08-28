import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
function Header () {
  return <header className='header-principal'>
    <Link to="/">
      <img src={process.env.PUBLIC_URL + '/media/logo-kasa.png'} alt="Logo Kasa" />
    </Link><Navbar/>
  </header>;
}

export default Header;
