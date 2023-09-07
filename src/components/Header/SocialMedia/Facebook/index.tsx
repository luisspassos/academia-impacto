import { BsFacebook } from 'react-icons/bs';
import { BtnBase } from '../BtnBase';
import styles from './style.module.css';

export function Facebook() {
  return (
    <BtnBase
      className={styles.btn}
      Icon={BsFacebook}
      href='https://www.facebook.com/'
      socialMedia='Facebook'
    />
  );
}
