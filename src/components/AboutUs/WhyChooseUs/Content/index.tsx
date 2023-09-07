import { Images } from './Images';
import { Texts } from './Texts';
import styles from './style.module.scss';

export function Content() {
  return (
    <div className={styles.content}>
      <Images />
      <Texts />
    </div>
  );
}
