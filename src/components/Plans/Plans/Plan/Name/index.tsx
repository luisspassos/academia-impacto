import { PlanProps } from '..';
import styles from './styles.module.scss';

type NameProps = {
  name: PlanProps['name'];
};

export function Name({ name }: NameProps) {
  return <h2 className={styles.name}>{name}</h2>;
}
