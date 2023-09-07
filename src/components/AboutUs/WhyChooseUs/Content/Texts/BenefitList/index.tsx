import { Item } from './Item';
import styles from './style.module.scss';

const benefits = [
  'PROFESSOR A TODO MOMENTO PARA ENSINAR',
  'TREINO PERSONALIZADO PARA SEU OBJETIVO',
  'EQUIPAMENTOS DE ALTA QUALIDADE',
  'TREINAR COM OUTRAS PESSOAS',
];

export function BenefitList() {
  return (
    <ul className={styles.list}>
      {benefits.map((benefit) => (
        <Item text={benefit} key={benefit} />
      ))}
    </ul>
  );
}
