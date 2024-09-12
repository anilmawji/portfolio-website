import styles from './Experience.module.css';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
}

const ExperienceSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      
    </section>
  );
}

export default ExperienceSection;