import img from '../../../../assets/home-img.png';
import styles from './style.module.css';

export function Img() {
  return (
    <img
      className={styles.img}
      src={img}
      alt='Homem e mulher levantando peso'
      width={1219}
      height={1055}
    />
  );
}
