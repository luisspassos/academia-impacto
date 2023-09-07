import { Facebook } from './Button/Facebook';
import { Instagram } from './Button/Instagram';
import styles from './styles.module.scss';

export function SocialMedia() {
  return (
    <div className={styles.css}>
      <Instagram />
      <Facebook />
    </div>
  );
}
