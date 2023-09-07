import { FacebookIcon } from '../../../../../../../../../utils/icons';
import { Base } from '../base';
import styles from './styles.module.scss';

export function Facebook() {
  return (
    <Base
      className={styles.css}
      Icon={FacebookIcon}
      href='https://www.facebook.com/'
      socialMedia='Facebook'
    />
  );
}
