import { useDataIndex } from '../../../../../../../contexts/DataIndex';
import styles from './styles.module.scss';

export function Name() {
  const {
    currentData: { name },
  } = useDataIndex();

  return <div className={styles.name}>{name}</div>;
}
