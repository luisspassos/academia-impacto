import { useDataIndex } from '../../../../../contexts/DataIndex';
import styles from './styles.module.scss';

export function Testimony() {
  const {
    currentData: { testimony },
  } = useDataIndex();

  return <p className={styles.css}>{testimony}</p>;
}
