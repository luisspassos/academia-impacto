import styles from './style.module.scss';

type BaseProps = {
  className?: string;
};

export function Base({ className }: BaseProps) {
  return <div className={styles.base + ' ' + className} />;
}
