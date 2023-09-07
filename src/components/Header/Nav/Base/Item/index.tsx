import styles from './style.module.css';

export type ItemProps = {
  text: string;
  href: string;
  isFocused: boolean;
  animation: string;
};

export function Item({ text, href, isFocused, animation }: ItemProps) {
  const focusClass = isFocused ? `${styles.focused} ${styles[animation]}` : '';

  return (
    <li>
      <a className={`${styles.link} ${focusClass}`} href={`#${href}`}>
        {text}
      </a>
    </li>
  );
}
