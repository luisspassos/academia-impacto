import { BsArrowRight } from 'react-icons/bs';
import styles from './style.module.css';
import { id as PlansId } from '../../../Plans';

export function Button() {
  return (
    <a href={'#' + PlansId} className={styles.button}>
      Começar
      <BsArrowRight />
    </a>
  );
}
