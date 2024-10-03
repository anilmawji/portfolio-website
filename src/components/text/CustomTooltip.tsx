import styles from './CustomTooltip.module.css';
import { useState, useRef } from 'react';
import { joinClassNames, ReactCSSVariables } from '../../utils';

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
  fitTextOnSingleLine?: boolean;
  children?: React.ReactNode;
}

const CustomTooltip = ({
  text,
  direction = TooltipDirection.BOTTOM,
  width = 'auto',
  distance = '16px',
  visibilityDelay = 500,
  fitTextOnSingleLine,
  children
}: Props) => {

  const [isToolTipVisible, setIsTooltipVisible] = useState(false);
  const [visibilityTimer, setVisibilityTimer] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipStyle: ReactCSSVariables = {
    '--tooltip-width': width,
    '--tooltip-distance': distance
  };

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
          isToolTipVisible ? styles.show : '',
          fitTextOnSingleLine ? styles.singleLine : ''
        )}
      >
        {text}
        <span className={styles[`arrow${getOppositeDirection(direction)}`]} />
      </div>
    </div>
  );
}

export { CustomTooltip, TooltipDirection };
