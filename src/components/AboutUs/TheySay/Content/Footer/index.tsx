import { Author } from './Author';
import { Buttons } from './Buttons';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.css}>
      <Author />
      <Buttons />
    </footer>
  );
}
