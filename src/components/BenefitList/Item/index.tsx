import { BsCheck2Circle } from 'react-icons/bs';
import styles from './style.module.scss';

type ItemProps = {
  text: string;
};

export function Item({ text }: ItemProps) {
  return (
    <li className={styles.item}>
      <BsCheck2Circle />
      {text}
    </li>
  );
}
