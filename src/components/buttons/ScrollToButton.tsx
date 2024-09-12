import styles from './ScrollToButton.module.css';
import { Icon, IconType } from '../icons/Icon';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
  size?: number;
  rotation?: number;
  scrollPosition: number;
  includeRing?: boolean;
}

const scrollTo = (scrollPosition: number) => {
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

const ScrollToButton = ({ className, size = 50, rotation = 0, scrollPosition, includeRing }: Props) => {
  const buttonStyle = {
    '--scroll-btn-size': `${size}px`,
    '--scroll-btn-rotation': `${rotation}deg`
  } as React.CSSProperties;

  return (
    <div
      className={joinClassNames(
        styles.button,
        includeRing ? styles.ring : '',
        className
      )}
      style={buttonStyle}
      onClick={() => scrollTo(scrollPosition)}
    >
      <Icon className={styles.arrow} type={IconType.ARROW} />
    </div>
  );
}

export default ScrollToButton;