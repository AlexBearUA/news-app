import { Link, NavLink } from 'react-router-dom';
import css from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.logo} to="/">
        News
      </Link>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="favorite">
        Favorite
      </NavLink>
      <NavLink className={css.navLink} to="read">
        Read
      </NavLink>
    </nav>
  );
};
