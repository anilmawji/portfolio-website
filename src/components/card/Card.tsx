import styles from './Card.module.css'
import Tag from './Tag';

interface PropTypes {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Card = ({ image, title, description, tags, link }: PropTypes) => {
  return (
    <a className={styles.container} href={link} target="_blank">
      <img src={image} />
      <div className={styles.body}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <div className={styles.description}>
          {description}
        </div>
        <h3 className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </h3>
      </div>
    </a>
  )
}

export default Card