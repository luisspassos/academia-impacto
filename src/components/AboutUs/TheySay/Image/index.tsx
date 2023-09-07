import { After } from './After';
import { Before } from './Before';
import { Img } from './Img';

import styles from './styles.module.scss';

export function Image() {
  return (
    <div className={styles.container}>
      <Before />
      <Img />
      <After />
    </div>
  );
}
