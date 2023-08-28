import { NavLink } from 'react-router-dom';

function Footer () {
  return <footer className='footer'>
    <NavLink to="/">
          <img src={process.env.PUBLIC_URL + '/media/logo-dark.png'} alt="Logo de Kasa" />
        </NavLink>
        <p>2023 Kasa. Tous droits réservés</p>
    </footer>;
}

export default Footer;
