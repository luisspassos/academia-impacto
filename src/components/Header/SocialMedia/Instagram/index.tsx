import { BtnBase } from '../BtnBase';
import { Icon } from './Icon';
import styles from './style.module.css';

export function Instagram() {
  return (
    <BtnBase
      className={styles.btn}
      Icon={Icon}
      href='https://www.instagram.com/'
      socialMedia='Instagram'
    />
  );
}
