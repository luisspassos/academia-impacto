import { FaAngleLeft } from 'react-icons/fa';
import { Base } from '../Base';
import styles from './styles.module.scss';
import { SetIsFinal } from '../..';

type BackButtonProps = {
  setIsFinal: SetIsFinal;
};

export function BackButton({ setIsFinal }: BackButtonProps) {
  function handleBack() {
    setIsFinal(false);
  }

  return (
    <Base className={styles.button} onClick={handleBack} Icon={FaAngleLeft} />
  );
}
