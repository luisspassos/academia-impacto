import { FaAngleRight } from 'react-icons/fa';
import { Base } from '../Base';
import styles from './styles.module.scss';
import { SetIsFinal } from '../..';

type AdvanceButtonProps = {
  setIsFinal: SetIsFinal;
};

export function AdvanceButton({ setIsFinal }: AdvanceButtonProps) {
  function handleAdvance() {
    setIsFinal(true);
  }

  return (
    <Base
      onClick={handleAdvance}
      className={styles.button}
      Icon={FaAngleRight}
    />
  );
}
