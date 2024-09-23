import styles from './Chip.module.css';
import { rgb, rgbLinearShade, rgbToRgba, ReactCSSVariables } from '../../utils';

interface Props {
  label: string,
  color?: string
}

const Chip = ({ label, color = rgb(100, 233, 122) }: Props) => {
  const chipStyle: ReactCSSVariables = {
    '--chip-outline-color': color,
    '--chip-bg-top-color': rgbLinearShade(-0.15, color),
    '--chip-bg-bottom-color': rgbToRgba(rgbLinearShade(-0.33, color), 0.7),
    '--chip-text-shadow-color': rgbLinearShade(-0.5, color)
  };

  return (
    <div className={styles.chip} style={chipStyle}>
      {label}
    </div>
  );
}

export default Chip;