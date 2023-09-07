import { IconType } from 'react-icons';
import styles from './styles.module.scss';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type BaseProps = {
  Icon: IconType;
} & DefaultProps;

export function Base({ Icon, className, ...rest }: BaseProps) {
  return (
    <button className={styles.button + ' ' + className} {...rest}>
      <Icon />
    </button>
  );
}
