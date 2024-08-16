import styles from './CircuitLine.module.css';
import SvgCircuit from './icons/SvgCircuit';
import { getCssValue } from '../utils';
import { joinClassNames } from '../utils';

const CIRCUIT_SVG_COLOR = getCssValue(document.documentElement, "main-fg-color");

interface PropTypes {
  className?: string;
}

const CircuitLine = ({ className }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.circuit, className)}>
      <SvgCircuit className={styles.circuit_top} color={CIRCUIT_SVG_COLOR} />
      <div className={styles.line} />
      <SvgCircuit className={styles.circuit_bottom} color={CIRCUIT_SVG_COLOR}/>
    </div>
  );
}

export default CircuitLine;