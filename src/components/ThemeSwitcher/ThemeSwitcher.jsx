import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from 'components/App';
import css from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className={css.themeSwitcher}>
      <span className={css.themeSwitcherMode}>Light</span>
      <FiSun className={css.themeSwitcherIcon} />
      <div className={css.switcherCheckBox}>
        <input
          onChange={toggleTheme}
          className={css.themeSwitcherInput}
          type="checkbox"
          id="switch"
        />
        <label className={css.themeSwitcherLabel} htmlFor="switch">
          Toggle
        </label>
      </div>
      <span className={css.themeSwitcherMode}>Dark</span>
      <FiMoon className={css.themeSwitcherIcon} />
    </div>
  );
};
