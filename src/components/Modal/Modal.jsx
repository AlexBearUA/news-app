import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'components/App';
import { DARK } from 'components/constants';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleEscKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className={css.ModalBackdrop}
      style={{
        backgroundColor: theme === DARK ? '#2E2E2E' : '#F4F4F4',
      }}
    >
      <div className={css.ModalContent}>{children}</div>
    </div>,
    modalRoot
  );
};
