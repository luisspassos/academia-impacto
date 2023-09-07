import { IconType } from 'react-icons';
import styles from './style.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type ItemProps = {
  href: string;
  Icon: IconType;
} & DefaultProps;

export function Item({ href, Icon, ...rest }: ItemProps) {
  return (
    <a className={styles.item} href={href} {...rest}>
      <Icon />
      (38) 99165-7676
    </a>
  );
}
