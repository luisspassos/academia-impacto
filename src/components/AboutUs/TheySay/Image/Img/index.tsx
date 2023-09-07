import styles from './styles.module.scss';
import { useDataIndex } from '../../../../../contexts/DataIndex';

export function Img() {
  const {
    currentData: {
      img: { height, img, width },
    },
  } = useDataIndex();

  return (
    <img
      className={styles.img}
      width={width}
      height={height}
      src={img}
      alt='Foto de Maria Clara'
    />
  );
}
