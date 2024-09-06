import styles from './Experience.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
}

const ExperienceSection = ({ className }: PropTypes) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      
    </section>
  );
}

export default ExperienceSection;