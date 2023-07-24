import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { FiHome } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import css from './BurgerMenu.module.scss';

export const BurgerMenu = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation().pathname;

  return (
    <div className={`${css.burgerMenuWrapper} ${theme}`}>
      <Link onClick={onClose} className={css.logoMobile} to="/">
        News
      </Link>
      <button onClick={onClose} type="button" className={css.closeBtn}>
        <IoMdClose
          style={{ color: theme === 'dark' ? '#F4F4F4' : '#111321' }}
          className={css.closeBtnIcon}
        />
      </button>
      <nav className={css.navMobile}>
        <Link
          onClick={onClose}
          className={css.navLinkMobile}
          to="/"
          style={{
            backgroundColor: location === '/' && '#4440F6',
            color: location === '/' && 'white',
          }}
        >
          <span className={css.iconBacground}>
            <FiHome className={css.navLinkMobileIcon} />
          </span>
          Home
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>

        <Link
          onClick={onClose}
          className={css.navLinkMobile}
          to="favorite"
          style={{
            backgroundColor: location === '/favorite' && '#4440F6',
            color: location === '/favorite' && 'white',
          }}
        >
          <span className={css.iconBacground}>
            <BsHeart className={css.navLinkMobileIcon} />
          </span>
          Favorite
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>

        <Link
          onClick={onClose}
          className={css.navLinkMobile}
          to="read"
          style={{
            backgroundColor: location === '/read' && '#4440F6',
            color: location === '/read' && 'white',
          }}
        >
          <span className={css.iconBacground}>
            <FiBookOpen className={css.navLinkMobileIcon} />
          </span>
          Read
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>
      </nav>
      <ThemeSwitcher />
    </div>
  );
};
