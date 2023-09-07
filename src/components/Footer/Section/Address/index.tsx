import { Base } from '../Base';
import { Map } from './Map';
import { Link } from './Link';
import styles from './style.module.scss';

export function Address() {
  return (
    <Base title='Endereço'>
      <address className={styles.css}>
        <Map />
        <Link />
      </address>
    </Base>
  );
}
