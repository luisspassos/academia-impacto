import { PaddingTopSection } from '../PaddingTopSection';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
import { Plans as PlanList } from './Plans';
import styles from './style.module.scss';
import { Fade } from '../Fade';

export const id = 'planos';

export function Plans() {
  return (
    <PaddingTopSection className={styles.plans} id={id}>
      <Fade direction='down'>
        <Title />
        <Paragraph />
      </Fade>
      <PlanList />
    </PaddingTopSection>
  );
}
