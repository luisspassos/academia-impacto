import { Button } from './Button';
import { Modal } from './Modal';
import { useState } from 'react';

export type SetIsOpen = React.Dispatch<React.SetStateAction<boolean>>;

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
