import { FiSun, FiMoon } from 'react-icons/fi';
import css from './ThemeSwitcherMobile.module.scss';

export const ThemeSwitcherMobile = () => {
  return (
    <div className={css.themeSwitcherMobile}>
      <FiSun className={css.themeSwitcherIconMobile} />
      <div className={css.switcherCheckBoxMobile}>
        <input
          className={css.themeSwitcherInputMobile}
          type="checkbox"
          id="switchMobile"
        />
        <label className={css.themeSwitcherLabelMobile} htmlFor="switchMobile">
          Toggle
        </label>
      </div>
      <FiMoon className={css.themeSwitcherIconMobile} />
    </div>
  );
};
