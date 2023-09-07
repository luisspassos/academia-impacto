import { PlanProps } from '..';
import styles from './styles.module.scss';

type PriceProps = {
  price: PlanProps['price'];
};

export function Price({ price }: PriceProps) {
  return <h3 className={styles.price}>R${price}</h3>;
}
