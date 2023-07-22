import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from 'components/App';
import css from './ThemeSwitcher.module.scss';
import { DARK, LIGHT } from 'components/constants';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT);
  };

  const isThemeLight = theme === LIGHT;

  return (
    <div className={css.themeSwitcher}>
      <span
        className={css.themeSwitcherMode}
        style={{
          color: theme === LIGHT ? '#4B48DB' : 'inherit',
        }}
      >
        Light
      </span>
      <FiSun
        style={{
          color: theme === LIGHT ? '#4B48DB' : 'inherit',
        }}
        className={css.themeSwitcherIcon}
      />
      <div className={css.switcherCheckBox}>
        <input
          checked={!isThemeLight}
          onChange={toggleTheme}
          className={css.themeSwitcherInput}
          type="checkbox"
          id="switch"
        />
        <label className={css.themeSwitcherLabel} htmlFor="switch">
          Toggle
        </label>
      </div>
      <span
        style={{
          color: theme === DARK ? '#4B48DB' : 'inherit',
        }}
        className={css.themeSwitcherMode}
      >
        Dark
      </span>
      <FiMoon
        style={{
          color: theme === DARK ? '#4B48DB' : 'inherit',
        }}
        className={css.themeSwitcherIcon}
      />
    </div>
  );
};
