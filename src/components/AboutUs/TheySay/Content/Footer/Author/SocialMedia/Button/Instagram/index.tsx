import { InstagramIcon } from '../../../../../../../../../utils/icons';
import { Base } from '../base';
import styles from './styles.module.scss';

export function Instagram() {
  return (
    <Base
      Icon={InstagramIcon}
      href='https://www.instagram.com/'
      className={styles.button}
      socialMedia='Instagram'
    />
  );
}
