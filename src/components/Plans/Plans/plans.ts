import { CrownIcon } from './Icons/Crown';
import { Dumbbell } from './Icons/Dumbbell';
import { HealthCareIcon } from './Icons/HealthCare';
import { RunningIcon } from './Icons/Running';
import { StarIcon } from './Icons/Star';

export const plans = [
  {
    icon: CrownIcon,
    name: 'AULA EXPERIMENTAL',
    price: 0,
    benefits: ['Dia para experimentar a academia e seus exercícios'],
  },
  {
    icon: RunningIcon,
    name: 'TREINO AVULSO',
    price: 12,
    benefits: ['1 dia de acesso'],
  },
  {
    icon: HealthCareIcon,
    name: '2 Dias',
    price: 70,
    benefits: [
      '2 dias de acesso na semana',
      'Acesso a academia o dia inteiro',
      'Valido por 1 mês',
    ],
  },
  {
    icon: StarIcon,
    name: '3 Dias',
    price: 80,
    benefits: [
      '3 dias de acesso na semana',
      'Acesso a academia o dia inteiro',
      'Valido por 1 mês',
    ],
  },
  {
    icon: Dumbbell,
    name: '5 Dias',
    price: 90,
    benefits: [
      '5 dias de acesso na semana',
      'Acesso a academia o dia inteiro',
      'Valido por 1 mês',
    ],
  },
];
