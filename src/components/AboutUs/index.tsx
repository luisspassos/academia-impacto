import { useGetHeaderHeight } from '../../hooks/getHeaderHeight';
import { TheySay } from './TheySay';
import { WhyChooseUs } from './WhyChooseUs';

export const id = 'sobre-nos';

export function AboutUs() {
  const { height } = useGetHeaderHeight();

  return (
    <div style={{ scrollMarginTop: `calc(${height.rem} / 2)` }} id={id}>
      <WhyChooseUs />
      <TheySay />
    </div>
  );
}
