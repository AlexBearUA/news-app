import { Link } from 'react-router-dom';
import { ThemeSwitcherMobile } from 'components/ThemeSwitcherMobile/ThemeSwitcherMobile';
import { FiHome } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import css from './BurgerMenu.module.scss';

export const BurgerMenu = ({ onClose }) => {
  return (
    <div className={css.burgerMenuWrapper}>
      <Link onClick={onClose} className={css.logoMobile} to="/">
        News
      </Link>
      <button onClick={onClose} type="button" className={css.closeBtn}>
        <IoMdClose className={css.closeBtnIcon} />
      </button>
      <nav className={css.navMobile}>
        <Link onClick={onClose} className={css.navLinkMobile} to="/">
          <span className={css.iconBacground}>
            <FiHome className={css.navLinkMobileIcon} />
          </span>
          Home
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>

        <Link onClick={onClose} className={css.navLinkMobile} to="favorite">
          <span className={css.iconBacground}>
            <BsHeart className={css.navLinkMobileIcon} />
          </span>
          Favorite
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>

        <Link onClick={onClose} className={css.navLinkMobile} to="read">
          <span className={css.iconBacground}>
            <FiBookOpen className={css.navLinkMobileIcon} />
          </span>
          Read
          <IoIosArrowForward className={css.arrowIcon} />
        </Link>
      </nav>
      <ThemeSwitcherMobile />
    </div>
  );
};
