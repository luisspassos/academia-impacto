import { BenefitList } from '../../../../BenefitList';
import styles from './style.module.scss';

type BenefitsProps = {
  benefits: string[];
};

export function Benefits({ benefits }: BenefitsProps) {
  return <BenefitList className={styles.benefits} benefits={benefits} />;
}
