import { IconType } from 'react-icons';

import styles from './style.module.css';

type BtnBaseProps = {
  href: string;
  Icon: IconType;
  socialMedia: string;
  className: string;
};

export function BtnBase({
  href,
  Icon,
  socialMedia,
  className = '',
}: BtnBaseProps) {
  return (
    <a
      className={styles.btn + ' ' + className}
      aria-label={`Abrir ${socialMedia} da academia`}
      target='_blank'
      href={href}
      rel='noreferrer'
    >
      <Icon />
    </a>
  );
}
