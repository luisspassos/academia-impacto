import { Fade } from '../../Fade';
import { PaddingTopSection } from '../../PaddingTopSection';
import { Content } from './Content';
import { Image } from './Image';
import styles from './style.module.scss';

export function TheySay() {
  return (
    <Fade direction='up'>
      <PaddingTopSection className={styles.css}>
        <Content />
        <Image />
      </PaddingTopSection>
    </Fade>
  );
}
