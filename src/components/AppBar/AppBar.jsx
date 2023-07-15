import { NavBar } from 'components/NavBar/NavBar';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <div className={css.appBar}>
      <NavBar />
      <SearchBox />
      <button className={css.mobileMenuBtn} type="button">
        <RxHamburgerMenu className={css.mobileMenuIcon} />
      </button>
      <ThemeSwitcher />
    </div>
  );
};
