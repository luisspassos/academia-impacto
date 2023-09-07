import { MdClose } from 'react-icons/md';
import styles from './style.module.scss';
import { SetIsOpen } from '../..';

type CloseButtonProps = {
  setIsOpen: SetIsOpen;
};

export function CloseButton({ setIsOpen }: CloseButtonProps) {
  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <button
      onClick={handleCloseMenu}
      className={styles.button}
      aria-label='Fechar menu'
    >
      <MdClose />
    </button>
  );
}
