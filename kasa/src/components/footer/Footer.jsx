import { NavLink } from 'react-router-dom';
import logoDark from '../../media/logo-dark.png';
// affichage du pied de page
function Footer () {
  return <footer className='footer'>
    <NavLink to="/">
          <img src={logoDark} alt="Logo de Kasa" />
        </NavLink>
        <p>2023 Kasa. Tous droits réservés</p>
    </footer>;
}

export default Footer;
