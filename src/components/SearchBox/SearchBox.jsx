import css from './SearchBox.module.scss';

export const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <button onClick={() => console.log('click')} className={css.btnSearch}>
        <span>Go</span>
      </button>
      <input
        type="text"
        className={css.inputSearch}
        placeholder="Type to Search..."
      />
    </div>
  );
};
