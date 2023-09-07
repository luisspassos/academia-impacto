import { useLayoutEffect, useState } from 'react';

export function useGetHeaderHeight() {
  const [height, setHeight] = useState({ rem: '', px: 0 });

  useLayoutEffect(() => {
    const header = document.querySelector('header');

    if (!header) throw 'header is null';

    const { height } = header.getBoundingClientRect();

    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );

    const heightInRem = height / oneRem;

    setHeight({ rem: heightInRem + 'rem', px: height });
  }, []);

  return { height };
}
