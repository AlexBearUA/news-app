import { NavBar } from 'components/NavBar/NavBar';
import { SearchBox } from 'components/SearchBox/SearchBox';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <div className={css.appBar}>
      <NavBar />
      <SearchBox />
    </div>
  );
};
