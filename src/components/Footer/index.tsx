import { Blurry } from './Blurry';
import { Address } from './Section/Address';
import { Contact } from './Section/Contact';
import { Schedules } from './Section/Schedules';
import styles from './style.module.scss';

export const id = 'conhecer';

export function Footer() {
  return (
    <footer id={id} className={styles.footer}>
      <div>
        <Contact />
        <Schedules />
      </div>
      <Address />
      <Blurry />
    </footer>
  );
}
