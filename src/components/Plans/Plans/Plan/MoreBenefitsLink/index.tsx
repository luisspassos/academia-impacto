import { id as aboutUsId } from '../../../../AboutUs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './styles.module.scss';

export function MoreBenefitsLink() {
  return (
    <a className={styles.link} href={'#' + aboutUsId}>
      Ver mais benefícios
      <AiOutlineArrowRight />
    </a>
  );
}
