import styles from './style.module.scss';
import { Icon } from './Icon';

type ItemProps = {
  text: string;
};

export function Item({ text }: ItemProps) {
  return (
    <li className={styles.css}>
      <Icon />
      {text}
    </li>
  );
}
