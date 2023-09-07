import styles from './style.module.scss';
import { id as FooterId } from '../../../../Footer';

type ButtonProps = {
  isHighlighted: boolean;
};

export function Button({ isHighlighted }: ButtonProps) {
  const highlightClass = isHighlighted ? styles.highlight : '';

  return (
    <a href={'#' + FooterId} className={styles.button + ' ' + highlightClass}>
      <div className={styles.content}>
        <div>Começar Agora</div>
      </div>
    </a>
  );
}
