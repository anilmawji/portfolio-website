import styles from './Card.module.css'
import Tag from './Tag';
import CustomButton from '../CustomButton';

interface PropTypes {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const Card = ({ image, title, description, tags }: PropTypes) => {
  return (
    <div className={styles.container}>
      <img src={image} />
      <div className={styles.body}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <div className={styles.description}>
          {description}
        </div>
        <h3 className={styles.tags}>
          {tags.map((tag) =>
            <Tag label="tag" />
          )}
        </h3>
        <CustomButton>View</CustomButton>
      </div>
    </div>
  )
}

export default Card