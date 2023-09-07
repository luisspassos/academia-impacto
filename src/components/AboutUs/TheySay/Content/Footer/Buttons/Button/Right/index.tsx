import { BsArrowRight } from 'react-icons/bs';
import { Button } from '..';
import { data, useDataIndex } from '../../../../../../../../contexts/DataIndex';

export function Right() {
  const { dataIndex, setDataIndex } = useDataIndex();

  const isBlocked = dataIndex === data.length - 1;

  function handleAdvance() {
    setDataIndex((prev) => prev + 1);
  }

  return (
    <Button
      aria-label='Voltar'
      onClick={handleAdvance}
      blocked={isBlocked}
      Icon={BsArrowRight}
    />
  );
}
