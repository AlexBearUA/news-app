import { useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavBar } from 'components/NavBar/NavBar';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { Modal } from 'components/Modal/Modal';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { ThemeContext } from 'components/App';
import { DARK } from 'components/constants';
import css from './AppBar.module.scss';

export const AppBar = () => {
  const [isModalOpen, setModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  return (
    <header className={`${css.appBar} ${theme}`}>
      <NavBar />
      <SearchBox />
      <button className={css.mobileMenuBtn} onClick={toggleModal} type="button">
        <RxHamburgerMenu
          style={{
            color: theme === DARK ? '#F4F4F4' : '#111321',
          }}
          className={css.mobileMenuIcon}
        />
      </button>
      {isTabletOrDesktop && <ThemeSwitcher />}

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BurgerMenu onClose={toggleModal} />
        </Modal>
      )}
    </header>
  );
};
