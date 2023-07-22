import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { FiSun, FiMoon } from 'react-icons/fi';
import { DARK, LIGHT } from 'components/constants';
import css from './ThemeSwitcherMobile.module.scss';

export const ThemeSwitcherMobile = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT);
  };

  const isThemeLight = theme === LIGHT;

  return (
    <div className={css.themeSwitcherMobile}>
      <FiSun
        style={{
          color: theme === LIGHT ? '#4B48DB' : 'inherit',
        }}
        className={css.themeSwitcherIconMobile}
      />
      <div className={css.switcherCheckBoxMobile}>
        <input
          checked={!isThemeLight}
          onChange={toggleTheme}
          className={css.themeSwitcherInputMobile}
          type="checkbox"
          id="switchMobile"
        />
        <label className={css.themeSwitcherLabelMobile} htmlFor="switchMobile">
          Toggle
        </label>
      </div>
      <FiMoon
        style={{
          color: theme === DARK ? '#4B48DB' : 'inherit',
        }}
        className={css.themeSwitcherIconMobile}
      />
    </div>
  );
};
