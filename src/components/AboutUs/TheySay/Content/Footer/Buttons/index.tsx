import { Left } from './Button/Left';
import { Right } from './Button/Right';
import styles from './styles.module.scss';

export function Buttons() {
  return (
    <div className={styles.css}>
      <Left />
      <Right />
    </div>
  );
}
