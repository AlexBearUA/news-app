import { useContext, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiSearch, FiX } from 'react-icons/fi';
import { ThemeContext, NewsQueryContext } from 'components/App';
import { DARK } from 'components/constants';
import css from './SearchBox.module.scss';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { theme } = useContext(ThemeContext);

  const { setNewshQuery } = useContext(NewsQueryContext);

  const inputRef = useRef(null);

  const themeIsDark = theme === DARK;

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  const onSearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const cleanSearchInput = () => {
    setSearchQuery('');
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const onFormSubmit = e => {
    e.preventDefault();
    setNewshQuery(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={onFormSubmit} className={css.searchBox}>
      <button
        type="submit"
        onClick={setInputFocus}
        className={css.btnSearch}
        disabled={!searchQuery}
      >
        <FiSearch
          className={css.btnSearchIcon}
          style={{
            color:
              (!searchQuery && themeIsDark && '#F4F4F4') ||
              (searchQuery && themeIsDark && 'blue') ||
              (!searchQuery && !themeIsDark && '#111321') ||
              (searchQuery && !themeIsDark && 'blue'),
          }}
        />
      </button>
      <input
        onChange={onSearchQueryChange}
        value={searchQuery}
        ref={inputRef}
        type="text"
        className={`${css.inputSearch} ${
          isTabletOrDesktop && themeIsDark && css.lightBorder
        } ${themeIsDark ? css.lightBorderMobile : css.darkBorderMobile}`}
        placeholder="Search |"
        style={{
          width: searchQuery && isMobile && '173px',
          paddingLeft: searchQuery && isMobile && '35px',
          color: themeIsDark ? '#F4F4F4' : '#111321',
          borderColor:
            (searchQuery && isMobile && themeIsDark && '#F4F4F4') ||
            (searchQuery && isMobile && !themeIsDark && '#111321'),
        }}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={cleanSearchInput}
          className={css.cleanBtn}
        >
          <FiX
            style={{
              color: themeIsDark ? '#F4F4F4' : '#111321',
            }}
            className={css.cleanBtnIcon}
          />
        </button>
      )}
    </form>
  );
};
