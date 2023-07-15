import { FiSun, FiMoon } from 'react-icons/fi';
import css from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  return (
    <div className={css.themeSwitcher}>
      <span className={css.themeSwitcherMode}>Light</span>
      <FiSun className={css.themeSwitcherIcon} />
      <div className={css.switcherCheckBox}>
        <input className={css.themeSwitcherInput} type="checkbox" id="switch" />
        <label className={css.themeSwitcherLabel} htmlFor="switch">
          Toggle
        </label>
      </div>
      <span className={css.themeSwitcherMode}>Dark</span>
      <FiMoon className={css.themeSwitcherIcon} />
    </div>
  );
};
