import styles from './style.module.scss';
import { ReactNode } from 'react';

type TitleProps = {
  text: ReactNode;
};

export function Title({ text }: TitleProps) {
  return <h1 className={styles.title}>{text}</h1>;
}
