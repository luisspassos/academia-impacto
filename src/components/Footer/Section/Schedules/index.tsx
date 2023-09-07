import { Base } from '../Base';
import { Schedule } from './Schedule';
import styles from './style.module.scss';

const defaultTime = '06:00 - 21:00';

const schedules = [
  {
    day: 'Domingo',
    time: 'Fechado',
  },
  {
    day: 'Segunda',
    time: defaultTime,
  },
  {
    day: 'Terça',
    time: defaultTime,
  },
  {
    day: 'Quarta',
    time: defaultTime,
  },
  {
    day: 'Quinta',
    time: defaultTime,
  },
  {
    day: 'Sexta',
    time: defaultTime,
  },
  {
    day: 'Sábado',
    time: '07:00 - 11:00',
  },
];

export function Schedules() {
  return (
    <Base title='Horários'>
      <ul className={styles.list}>
        {schedules.map(({ day, time }) => (
          <Schedule day={day} time={time} key={day} />
        ))}
      </ul>
    </Base>
  );
}
