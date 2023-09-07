import { ReactNode } from 'react';
import { SmallText } from './SmallText';
import { Title as TitleText } from './Title';

type TitleProps = {
  smallText: string;
  titleText: ReactNode;
};

export function Title({ smallText, titleText }: TitleProps) {
  return (
    <>
      <SmallText text={smallText} />
      <TitleText text={titleText} />
    </>
  );
}
