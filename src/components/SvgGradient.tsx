import { SvgGradientWrapper } from './SvgGradientWrapper';

export function SvgGradient() {
  const style = getComputedStyle(document.documentElement);

  const gradient = {
    1: {
      color: style.getPropertyValue('--gradient-color-1'),
      offset: style.getPropertyValue('--gradient-offset-1'),
    },
    2: {
      color: style.getPropertyValue('--gradient-color-2'),
    },
  };

  return (
    <>
      <SvgGradientWrapper>
        <radialGradient id='instagram-gradient-svg' r='150%' cx='30%' cy='107%'>
          <stop stopColor='#fdf497' offset='0' />
          <stop stopColor='#fdf497' offset='0.05' />
          <stop stopColor='#fd5949' offset='0.45' />
          <stop stopColor='#d6249f' offset='0.6' />
          <stop stopColor='#285AEB' offset='0.9' />
        </radialGradient>
      </SvgGradientWrapper>

      <SvgGradientWrapper>
        <linearGradient id='svgGradient'>
          <stop stopColor={gradient[1].color} offset={gradient[1].offset} />
          <stop stopColor={gradient[2].color} offset='100%' />
        </linearGradient>
      </SvgGradientWrapper>
    </>
  );
}
