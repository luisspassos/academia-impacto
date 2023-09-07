import { IconType } from 'react-icons';
import styles from './styles.module.scss';
import { useDataIndex } from '../../../../../../../../contexts/DataIndex';

type DefaultProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type BaseProps = {
  Icon: IconType;
  href: string;
  className: string;
  socialMedia: string;
} & DefaultProps;

export function Base({
  Icon,
  href,
  className,
  socialMedia,
  ...rest
}: BaseProps) {
  const {
    currentData: { name },
  } = useDataIndex();

  return (
    <a
      className={styles.button + ' ' + className}
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={`Ver ${socialMedia} de ${name}`}
      {...rest}
    >
      <Icon />
    </a>
  );
}
