import { Facebook } from './Facebook';
import { Instagram } from './Instagram';
import styles from './style.module.scss';

type SocialMediaProps = {
  className?: string;
};

export function SocialMedia({ className }: SocialMediaProps) {
  return (
    <ul className={styles.socialMedia + ' ' + className}>
      <Instagram />
      <Facebook />
    </ul>
  );
}
