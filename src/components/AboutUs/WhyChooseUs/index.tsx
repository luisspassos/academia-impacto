import { PaddingTopSection } from '../../PaddingTopSection';
import { Content } from './Content';

import styles from './style.module.scss';

export function WhyChooseUs() {
  return (
    <PaddingTopSection className={styles.aboutUs}>
      <Content />
    </PaddingTopSection>
  );
}
