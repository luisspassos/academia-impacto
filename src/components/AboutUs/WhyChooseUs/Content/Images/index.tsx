import { Image } from './Image';
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';
import Img4 from './assets/img4.jpg';
import styles from './style.module.scss';

export function Images() {
  return (
    <div className={styles.container}>
      <Image width={4272} height={2848} src={Img2} alt='Prateleira de pesos' />
      <div>
        <Image
          width={6000}
          height={4000}
          src={Img1}
          alt='Homem levantando peso'
        />
        <div>
          <Image
            width={5198}
            height={3465}
            src={Img3}
            alt='Mulher segurando peso'
          />
          <Image
            width={4592}
            height={3448}
            src={Img4}
            alt='Homem fazendo exercício de triceps'
          />
        </div>
      </div>
    </div>
  );
}
