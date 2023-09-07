import { Item } from './Item';
import styles from './style.module.scss';

type BenefitListProps = {
  benefits: string[];
  className: string;
};

export function BenefitList({ benefits, className }: BenefitListProps) {
  return (
    <ul className={styles.list + ' ' + className}>
      {benefits.map((benefit) => (
        <Item text={benefit} key={benefit} />
      ))}
    </ul>
  );
}
