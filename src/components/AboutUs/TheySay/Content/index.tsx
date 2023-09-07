import { Title } from './Title';
import { Testimony } from './Testimony';
import { Footer } from './Footer';
import styles from './styles.module.scss';

export function Content() {
  return (
    <div className={styles.css}>
      <Title />
      <Testimony />
      <Footer />
    </div>
  );
}
