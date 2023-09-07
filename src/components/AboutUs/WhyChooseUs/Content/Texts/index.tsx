import { Fade } from '../../../../Fade';
import { BenefitList } from './BenefitList';
import { Title } from './Title';
import styles from './style.module.scss';

export function Texts() {
  return (
    <Fade direction='right'>
      <div className={styles.container}>
        <Title />
        <BenefitList />
      </div>
    </Fade>
  );
}
