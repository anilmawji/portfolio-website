import styles from './Tooltip.module.css';
import { useState, useRef } from 'react';
import { joinClassNames } from '../../utils';

const enum TooltipDirection {
  TOP = 'Top',
  LEFT = 'Left',
  RIGHT = 'Right',
  BOTTOM = 'Bottom'
}

const getOppositeDirection = (direction: TooltipDirection): TooltipDirection => {
  switch (direction) {
    case TooltipDirection.TOP    : return TooltipDirection.BOTTOM;
    case TooltipDirection.BOTTOM : return TooltipDirection.TOP;
    case TooltipDirection.LEFT   : return TooltipDirection.RIGHT;
    case TooltipDirection.RIGHT  : return TooltipDirection.LEFT;

    default : throw new Error("Invalid tooltip direction");
  }
}

interface Props {
  text: string;
  direction?: TooltipDirection;
  width?: string;
  distance?: string;
  visibilityDelay?: number;
  children?: React.ReactNode;
}

const Tooltip = ({
  text,
  direction = TooltipDirection.BOTTOM,
  width = 'unset',
  distance = '16px',
  visibilityDelay = 500,
  children
}: Props) => {

  const [isToolTipVisible, setIsTooltipVisible] = useState(false);
  const [visibilityTimer, setVisibilityTimer] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipStyle = {
    '--tooltip-width': width,
    '--tooltip-distance': distance
  } as React.CSSProperties;

  const handleMouseEnter = () => {
    // Show the tooltip after a delay
    const newTimer = setTimeout(() => setIsTooltipVisible(true), visibilityDelay);
    setVisibilityTimer(newTimer);
  }

  const handleMouseLeave = () => {
    // Clear the timer if the cursor leaves before the timeout completes
    if (visibilityTimer) {
      clearTimeout(visibilityTimer);
      setVisibilityTimer(null);
    }
    setIsTooltipVisible(false);
  }

  return (
    <div
      className={styles.tooltip}
      style={tooltipStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={tooltipRef}
    >
      {children}
      <div
        className={joinClassNames(
          styles.text,
          styles[`text${direction}`],
          isToolTipVisible ? styles.show : ''
        )}
      >
        {text}
        <span className={styles[`arrow${getOppositeDirection(direction)}`]} />
      </div>
    </div>
  );
}

export { Tooltip, TooltipDirection };
