import { PlanProps } from '..';
import { SvgGradientWrapper } from '../../../../SvgGradientWrapper';
import styles from './style.module.scss';

type IconProps = {
  Icon: PlanProps['icon'];
  isHighlighted: boolean;
};

export function Icon({ Icon, isHighlighted }: IconProps) {
  const highlightClass = isHighlighted ? styles.highlight : '';

  return (
    <>
      <SvgGradientWrapper>
        <linearGradient id='svgHighlight'>
          <stop stopColor='#FFFFFF' offset='15%' />
          <stop stopColor='#FFFFFF20' offset='85%' />
        </linearGradient>
      </SvgGradientWrapper>
      <Icon className={styles.icon + ' ' + highlightClass} />
    </>
  );
}
