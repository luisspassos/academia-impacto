import { Fade } from '../../Fade';
import { AdvanceButton } from './Buttons/Advance';
import { BackButton } from './Buttons/Back';
import { Plan } from './Plan';
import { plans } from './plans';
import styles from './styles.module.scss';
import { useEffect, useState, useRef } from 'react';

export type SetIsFinal = React.Dispatch<React.SetStateAction<boolean | null>>;

export function Plans() {
  const [isFinal, setIsFinal] = useState<boolean | null>(null);

  const scrollRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    if (isFinal === null) return;

    function scroll(position: number) {
      scrollRef.current?.scroll({ left: position, behavior: 'smooth' });
    }

    if (isFinal) {
      const goToStart = () => {
        const scrollWidth = scrollRef.current?.scrollWidth;

        if (scrollWidth === undefined) throw 'scroll width is undefined';

        scroll(scrollWidth);
      };

      goToStart();

      return;
    }

    const goToEnd = () => {
      scroll(0);
    };

    goToEnd();
  }, [isFinal]);

  const backButton = isFinal && <BackButton setIsFinal={setIsFinal} />;
  const advanceButton = !isFinal && <AdvanceButton setIsFinal={setIsFinal} />;

  return (
    <Fade style={{ width: '100%' }} direction='up'>
      <div className={styles.container}>
        {backButton}
        <ol ref={scrollRef} id='plans' className={styles.plans}>
          {plans.map((plan) => (
            <Plan {...plan} key={plan.name} />
          ))}
        </ol>
        {advanceButton}
      </div>
    </Fade>
  );
}
