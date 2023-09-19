import { NavLink } from 'react-router-dom';
// affichage de la barre de navigation
function Navbar () {
  return <nav className='navbar'>
      <ul>
        <li>
          {/* "NavLink" permet de créer un lien vers la page d'accueil et la page "A Propos"
          isActive est une fonction qui permet de donner une classe active au lien sur la page où nous sommes
          */}
          <NavLink className={({ isActive }) => (isActive ? 'button-link-active' : 'button-link')}
            to="/" >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'button-link-active' : 'button-link')}
            to="/about"
          >A Propos
          </NavLink>
        </li>
      </ul>
    </nav>;
}
export default Navbar;
