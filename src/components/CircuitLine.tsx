import styles from './CircuitLine.module.css'
import SvgCircuit from './icons/SvgCircuit'
import { getCssValue } from '../Utils'

const CIRCUIT_SVG_COLOR = getCssValue(document.documentElement, "main-fg-color");

interface PropTypes {
  className?: string;
}

const CircuitLine = ({ className }: PropTypes) => {
  const combinedClassName = `${styles.circuit} ${className}`;

  return (
    <div className={combinedClassName}>
      <SvgCircuit className={styles.circuit_top} color={CIRCUIT_SVG_COLOR} />
      <div className={styles.line} />
      <SvgCircuit className={styles.circuit_bottom} color={CIRCUIT_SVG_COLOR}/>
    </div>
  )
}

export default CircuitLine