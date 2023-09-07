import styles from './style.module.scss';

export function Link() {
  return (
    <a
      className={styles.link}
      target='_blank'
      href='https://goo.gl/maps/DvCGTdBbg5axknto9'
      rel='noreferrer'
    >
      Av. Coração de Jesus, 830 - Maj. Prates, Montes Claros - MG, 39403-513
    </a>
  );
}
