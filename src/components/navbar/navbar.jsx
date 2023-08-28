import { NavLink } from 'react-router-dom';

function Navbar () {
  return <nav className='navbar'>
      <ul>
        <li>
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
