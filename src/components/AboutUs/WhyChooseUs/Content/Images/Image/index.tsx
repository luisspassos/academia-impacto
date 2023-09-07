import styles from './style.module.scss';

type DefaultProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type ImageProps = DefaultProps;

export function Image(props: ImageProps) {
  return <img className={styles.img} {...props} />;
}
