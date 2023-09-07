import { Fade } from '../../Fade';
import { Button } from './Button';
import { MainTitle } from './MainTitle';
import { NumberOfMembers } from './NumberOfMembers';
import { Paragraph } from './Paragraph';
import { SecondTitle } from './SecondTitle';
import styles from './style.module.scss';

export function Content() {
  return (
    <Fade direction='left'>
      <div className={styles.content}>
        <SecondTitle />
        <MainTitle />
        <div className={styles.bottom}>
          <Paragraph />
          <NumberOfMembers />
          <Button />
        </div>
      </div>
    </Fade>
  );
}
