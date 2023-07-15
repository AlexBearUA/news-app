import { FiSearch } from 'react-icons/fi';
import css from './SearchBox.module.scss';

export const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <button onClick={() => console.log('click')} className={css.btnSearch}>
        <FiSearch className={css.btnSearchIcon} />
      </button>
      <input type="text" className={css.inputSearch} placeholder="Search |" />
    </div>
  );
};
