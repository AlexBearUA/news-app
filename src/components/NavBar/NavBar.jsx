import { Link, NavLink } from 'react-router-dom';
import css from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div className="container">
      <nav className={css.nav}>
        <Link className={css.logo} to="/">
          News
        </Link>
        <NavLink className={css.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={css.navItem} to="favorite">
          Favorite
        </NavLink>
        <NavLink className={css.navItem} to="read">
          Read
        </NavLink>
      </nav>
    </div>
  );
};
