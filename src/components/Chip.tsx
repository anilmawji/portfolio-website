import styles from './Chip.module.css';

interface PropTypes {
  label: string,
  color?: string
}

const Chip = ({ label, color }: PropTypes) => {
  return (
    <div className={styles.chip}>
      {label}
    </div>
  );
}

export default Chip;