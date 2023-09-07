import styles from './style.module.scss';

type SmallTextProps = {
  text: string;
  className?: string;
};

export function SmallText({ text, className }: SmallTextProps) {
  return <small className={styles.css + ' ' + className}>{text}</small>;
}
