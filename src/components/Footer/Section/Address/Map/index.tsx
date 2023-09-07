import styles from './style.module.scss';

export function Map() {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282.416522796077!2d-43.888564812573144!3d-16.746592746783616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab539d3688d7ad%3A0xdea45ada18355b8c!2sAcademia%20Impacto%20Fitnes!5e0!3m2!1spt-BR!2sbr!4v1694108297070!5m2!1spt-BR!2sbr'
      className={styles.map}
      style={{ border: 0 }}
      allowFullScreen={false}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
}
