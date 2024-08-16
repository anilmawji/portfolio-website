import styles from './Featured.module.css';
import CardContainer from '../CardContainer';
import BlogData from '../../data/BlogData';

const FeaturedSection = ({ ...restStyles }) => {
  return (
    <div className={styles.container} {...restStyles}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer cardData={BlogData} />
    </div>
  );
}

export default FeaturedSection;