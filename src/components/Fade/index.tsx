import { ReactNode } from 'react';
import {
  Fade as FadeComponent,
  FadeProps as FadeComponentProps,
} from 'react-awesome-reveal';
import styles from './styles.module.scss';

type FadeProps = {
  children: ReactNode;
} & FadeComponentProps;

export function Fade({ children, ...rest }: FadeProps) {
  return (
    <FadeComponent triggerOnce className={styles.fade} {...rest}>
      {children}
    </FadeComponent>
  );
}
