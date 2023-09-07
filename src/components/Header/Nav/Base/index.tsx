import { useEffect, useState } from 'react';
import { Item } from './Item';
import { links } from './links';
import styles from './style.module.scss';
import { useGetHeaderHeight } from '../../../../hooks/getHeaderHeight';

type ScrollCoordinates = {
  start: null | number;
  end: null | number;
};

type NavProps = {
  className?: string;
};

export function Nav({ className }: NavProps) {
  const [focusedSection, setFocusedSection] = useState({
    index: 0,
    animation: '',
  });
  const { height: headerHeight } = useGetHeaderHeight();

  useEffect(() => {
    function getFocusedSection() {
      type Set = (index: number) => void;

      function base(set: Set) {
        const scrollIsOnTheBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (scrollIsOnTheBottom) {
          const footerId = links.length - 1;

          set(footerId);

          return;
        }

        for (const i in links) {
          const link = links[i];

          const section = document.getElementById(link.href);

          if (!section) throw 'section is null';

          const { y, height } = section.getBoundingClientRect();

          if (y - headerHeight.px > -height) {
            set(+i);

            break;
          }
        }
      }

      function init() {
        base((i) => {
          setFocusedSection((prev) => ({
            ...prev,
            index: i,
          }));
        });
      }

      const scrollCoordinates: ScrollCoordinates = {
        start: null,
        end: null,
      };

      function scrollEvent() {
        function getCoordinates() {
          if (scrollCoordinates.start === null) {
            scrollCoordinates.start = window.scrollY;
          } else {
            scrollCoordinates.end = window.scrollY;
          }
        }

        getCoordinates();

        base((i) => {
          if (scrollCoordinates.start === null) throw 'start is null';
          if (scrollCoordinates.end === null) throw 'end is null';

          const gotDown = scrollCoordinates.start < scrollCoordinates.end;

          setFocusedSection({
            index: +i,
            animation: gotDown ? 'left' : 'right',
          });
        });
      }

      return { init, scrollEvent };
    }

    const { init, scrollEvent } = getFocusedSection();
    init();

    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [focusedSection.index, headerHeight.px]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list + ' ' + className}>
        {links.map(({ href, text }, i) => {
          return (
            <Item
              isFocused={i === focusedSection.index}
              animation={focusedSection.animation}
              href={href}
              text={text}
              key={text}
            />
          );
        })}
      </ul>
    </nav>
  );
}
