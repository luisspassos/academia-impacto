import { BiMenu } from 'react-icons/bi';
import styles from './style.module.scss';
import { SetIsOpen } from '..';

type ButtonProps = {
  setIsOpen: SetIsOpen;
  isOpen: boolean;
};

export function Button({ setIsOpen, isOpen }: ButtonProps) {
  function handleOpenMenu() {
    setIsOpen(true);
  }

  const openClass = isOpen ? styles.open : '';

  return (
    <button
      onClick={handleOpenMenu}
      className={styles.button + ' ' + openClass}
    >
      <BiMenu />
    </button>
  );
}
