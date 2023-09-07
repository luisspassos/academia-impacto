import { BsArrowLeft } from 'react-icons/bs';
import { Button } from '..';
import { useDataIndex } from '../../../../../../../../contexts/DataIndex';

export function Left() {
  const { dataIndex, setDataIndex } = useDataIndex();

  const isBlocked = dataIndex === 0;

  function handleBack() {
    setDataIndex((prev) => prev - 1);
  }

  return (
    <Button
      aria-label='Avançar'
      onClick={handleBack}
      blocked={isBlocked}
      Icon={BsArrowLeft}
    />
  );
}
