import styles from './ScrollToButton.module.css';
import { Icon, IconType } from '../icons/Icon';
import { joinClassNames, ReactCSSVariables } from '../../utils';
import { NavLink } from 'react-router-dom';

interface Props {
  className?: string;
  size?: number;
  rotation?: number;
  color?: string;
  hoverColor?: string;
  scrollLocation: number | string;
  includeRing?: boolean;
}

const scrollTo = (scrollPosition: number) => {
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

const ScrollToButton = ({
  className,
  size = 50,
  rotation = 0,
  color,
  hoverColor,
  scrollLocation,
  includeRing = false
}: Props) => {
  const buttonStyle: ReactCSSVariables = {
    '--scroll-btn-size': `${size}px`,
    '--scroll-btn-rotation': `${rotation}deg`,
    '--scroll-btn-color': color,
    '--scroll-btn-hover-color': hoverColor
  };

  return (
    typeof scrollLocation === 'number' ? (
      <div
        className={joinClassNames(
          styles.button,
          includeRing ? styles.ring : '',
          className
        )}
        style={buttonStyle}
        onClick={() => scrollTo(Number(scrollLocation))}
      >
        <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
      </div>
    ) : (
      <NavLink
        className={joinClassNames(
          styles.button,
          includeRing ? styles.ring : '',
          className
        )}
        style={buttonStyle}
        to={String(scrollLocation)}
      >
        <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
      </NavLink>
    )
  );
}

export default ScrollToButton;