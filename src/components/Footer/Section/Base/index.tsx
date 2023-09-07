import { ReactNode } from 'react';
import styles from './style.module.scss';
import { Fade } from '../../../Fade';

type BaseProps = {
  title: string;
  children: ReactNode;
};

export function Base({ children, title }: BaseProps) {
  return (
    <Fade className={styles.base} direction='up'>
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    </Fade>
  );
}
