import styles from './Tooltip.module.css'
import { useState, useRef } from 'react';

const enum ToolTipDirection {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM
}

interface Props {
  text?: string;
  direction?: ToolTipDirection;
  children?: React.ReactNode;
}

const ToolTip = ({ text, direction, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);

  return (
    <div className={styles.container}>
      <button className={styles.target}>
        {children}
      </button>
      {text}
    </div>
  );
}

export { ToolTip, ToolTipDirection };