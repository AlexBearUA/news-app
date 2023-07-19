import { useState, useContext } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavBar } from 'components/NavBar/NavBar';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { Modal } from 'components/Modal/Modal';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import css from './AppBar.module.scss';
import { ThemeContext } from 'components/App';

export const AppBar = () => {
  const [isModalOpen, setModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  // console.log(theme);

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  return (
    <div className={`${css.appBar} ${theme}`}>
      <NavBar />
      <SearchBox />
      <button className={css.mobileMenuBtn} onClick={toggleModal} type="button">
        <RxHamburgerMenu className={css.mobileMenuIcon} />
      </button>
      <ThemeSwitcher />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BurgerMenu onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
};