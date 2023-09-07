import styles from './style.module.scss';

type BlurryProps = {
  className?: string;
};

export function Blurry({ className }: BlurryProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      opacity='0.3'
      className={styles.svg + ' ' + className}
    >
      <defs>
        <filter
          id='bbblurry-filter'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='56'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter='url(#bbblurry-filter)'>
        <ellipse
          rx='150'
          ry='150'
          cx='14.903655846081449'
          cy='34.325847445982276'
          className={styles.blurry}
        ></ellipse>
      </g>
    </svg>
  );
}
