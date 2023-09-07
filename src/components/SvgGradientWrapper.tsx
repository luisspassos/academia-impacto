import { ReactNode } from 'react';

type SvgGradientWrapperProps = {
  children: ReactNode;
};

export function SvgGradientWrapper({ children }: SvgGradientWrapperProps) {
  return (
    <svg width='0' height='0'>
      {children}
    </svg>
  );
}
