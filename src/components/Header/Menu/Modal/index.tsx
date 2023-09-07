import { useEffect, useRef } from 'react';
import { SetIsOpen } from '..';
import { Blurry } from '../../Blurry';
import { CloseButton } from './CloseButton';
import { Nav } from './Nav';
import { SocialMedia } from './SocialMedia';
import styles from './style.module.scss';

type ModalProps = {
  setIsOpen: SetIsOpen;
  isOpen: boolean;
};

type ClickEvent = React.MouseEvent<HTMLDialogElement, MouseEvent>;

export function Modal({ setIsOpen, isOpen }: ModalProps) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.style.overflowY = 'hidden';

      return;
    }

    ref.current?.close();
    document.body.style.overflowY = 'visible';
  }, [isOpen]);

  function handleCloseModalWhenClickingOutside(e: ClickEvent) {
    const { left, right, top, bottom } =
      e.currentTarget.getBoundingClientRect();

    if (
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < top ||
      e.clientY > bottom
    ) {
      setIsOpen(false);
    }
  }

  return (
    <dialog
      onClick={handleCloseModalWhenClickingOutside}
      ref={ref}
      className={styles.modal}
    >
      <Blurry />
      <CloseButton setIsOpen={setIsOpen} />
      <Nav />
      <SocialMedia />
    </dialog>
  );
}
