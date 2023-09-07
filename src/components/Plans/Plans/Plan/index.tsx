import { plans } from '../plans';
import { Benefits } from './Benefits';
import { Button } from './Button';
import { Icon } from './Icon';
import { MoreBenefitsLink } from './MoreBenefitsLink';
import { Name } from './Name';
import { Price } from './Price';
import styles from './styles.module.scss';

export type PlanProps = (typeof plans)[number];

export function Plan({ icon, benefits, name, price }: PlanProps) {
  const isHighlighted = name === 'AULA EXPERIMENTAL';

  const highlightClass = isHighlighted ? styles.highlight : '';

  return (
    <div className={styles.plan + ' ' + highlightClass}>
      <Icon isHighlighted={isHighlighted} Icon={icon} />
      <Name name={name} />
      <Price price={price} />
      <Benefits benefits={benefits} />
      <MoreBenefitsLink />
      <Button isHighlighted={isHighlighted} />
    </div>
  );
}
