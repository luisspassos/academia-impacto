import { ReactNode } from 'react';
import { useGetHeaderHeight } from '../../hooks/getHeaderHeight';
import styles from './style.module.scss';

type PaddingTopSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export function PaddingTopSection({
  children,
  className,
  style,
  ...rest
}: PaddingTopSectionProps) {
  const { height } = useGetHeaderHeight();

  return (
    <section
      className={styles.section + ' ' + className}
      style={{ paddingTop: `${height.rem}`, ...style }}
      {...rest}
    >
      {children}
    </section>
  );
}
