import styles from './Featured.module.css';
import CardContainer from '../CardContainer';
import ProjectData from '../../data/ProjectData';

const FeaturedSection = ({ ...restStyles }) => {
  return (
    <div className={styles.container} {...restStyles}>
      <div className={styles.title}>
        Portfolio
      </div>
      <CardContainer cardData={ProjectData} />
    </div>
  );
}

export default FeaturedSection;