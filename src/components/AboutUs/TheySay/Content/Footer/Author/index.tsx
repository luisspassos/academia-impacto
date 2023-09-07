import { Name } from './Name';
import { SocialMedia } from './SocialMedia';
import styles from './styles.module.scss';

export function Author() {
  return (
    <div className={styles.css}>
      <Name />
      <div>-</div>
      <SocialMedia />
    </div>
  );
}
