import { createContext, ReactNode, useContext, useState } from 'react';

type DataIndexProviderProps = {
  children: ReactNode;
};

type DataIndexContextType = {
  dataIndex: number;
  setDataIndex: React.Dispatch<React.SetStateAction<number>>;
  currentData: (typeof data)[number];
};

import mariaClaraImg from './images/maria_clara.webp';
import IsabelaImg from './images/isabela.webp';
import JorgeImg from './images/jorge.webp';

export const data = [
  {
    name: 'Maria Clara',
    testimony:
      'Eu fiz a escolha certa escolhendo a Academia Impacto. Depois que escolhi o plano, foquei nos meus treinos e consegui alcançar meu corpo perfeito!',
    img: {
      width: 723,
      height: 1286,
      img: mariaClaraImg,
    },
  },
  {
    name: 'Isabela',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, et eligendi rem perspiciatis accusamus quo eius eveniet non tempora libero consectetur at ipsa ex quia aspernatur iure, recusandae eos doloribus!',
    img: {
      width: 964,
      height: 1286,
      img: IsabelaImg,
    },
  },
  {
    name: 'Jorge',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, et eligendi rem perspiciatis accusamus quo eius eveniet non tempora libero consectetur at ipsa ex quia aspernatur iure, recusandae eos doloribus!',
    img: {
      img: JorgeImg,
      width: 1040,
      height: 1040,
    },
  },
];

export const DataIndexContext = createContext({} as DataIndexContextType);

export function DataIndexProvider({ children }: DataIndexProviderProps) {
  const [dataIndex, setDataIndex] = useState(0);
  const currentData = data[dataIndex];

  return (
    <DataIndexContext.Provider value={{ dataIndex, setDataIndex, currentData }}>
      {children}
    </DataIndexContext.Provider>
  );
}

export function useDataIndex() {
  const data = useContext(DataIndexContext);

  return data;
}
