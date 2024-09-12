import styles from './CircuitLine.module.css';
import SvgCircuit from './icons/SvgCircuit';
import { getCssValue } from '../utils';
import { joinClassNames } from '../utils';

const CIRCUIT_SVG_COLOR = getCssValue("main-fg-color");

interface Props {
  className?: string;
}

const CircuitLine = ({ className }: Props) => {
  return (
    <div className={joinClassNames(styles.circuit, className)}>
      <SvgCircuit className={styles.circuit_top} color={CIRCUIT_SVG_COLOR} />
      <div className={styles.line} />
      <SvgCircuit className={styles.circuit_bottom} color={CIRCUIT_SVG_COLOR} />
    </div>
  );
}

export default CircuitLine;