import { Fade } from '../../Fade';
import { Img } from './Img';
import { Triangle } from './Triangle';
import styles from './style.module.scss';

export function HighlightImage() {
  return (
    <Fade direction='right'>
      <div className={styles.container}>
        <Triangle />
        <Img />
      </div>
    </Fade>
  );
}
