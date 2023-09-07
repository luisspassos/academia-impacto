import styles from './style.module.scss';

type ScheduleProps = {
  time: string;
  day: string;
};

export function Schedule({ day, time }: ScheduleProps) {
  return (
    <time className={styles.schedule}>
      <span>{day}</span>
      {time}
    </time>
  );
}
