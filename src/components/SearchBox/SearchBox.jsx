import { useContext, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiSearch, FiX } from 'react-icons/fi';
import { ThemeContext } from 'components/App';
import { DARK } from 'components/constants';
import css from './SearchBox.module.scss';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { theme } = useContext(ThemeContext);

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

  return (
    <div className={css.searchBox}>
      <button type="button" onClick={setInputFocus} className={css.btnSearch}>
        <FiSearch
          className={css.btnSearchIcon}
          style={{
            color: themeIsDark ? 'white' : 'black',
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
            (searchQuery && isMobile && themeIsDark && 'white') ||
            (searchQuery && isMobile && !themeIsDark && 'black'),
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
              color: themeIsDark ? 'white' : 'black',
            }}
            className={css.cleanBtnIcon}
          />
        </button>
      )}
    </div>
  );
};
