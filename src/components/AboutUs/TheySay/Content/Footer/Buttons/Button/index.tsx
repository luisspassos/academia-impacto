import { IconType } from 'react-icons';
import styles from './styles.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  Icon: IconType;
  blocked?: boolean;
} & DefaultProps;

export function Button({ Icon, blocked, ...rest }: ButtonProps) {
  const blockedClass = blocked ? styles.blocked : '';

  return (
    <button
      disabled={blocked}
      className={styles.button + ' ' + blockedClass}
      {...rest}
    >
      <Icon />
    </button>
  );
}
