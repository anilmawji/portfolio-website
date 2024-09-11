import styles from './Card.module.css';
import Chip from '../text/Chip';
import { readingTime } from '../../utils';
import { joinClassNames } from '../../utils';
import { Post, isToolInfo } from '../../types';

const BULLET_POINT = String.fromCharCode(8226);

interface Props {
  data: Post;
  includeReadingTime: boolean;
}

const Card = ({ data, includeReadingTime = false }: Props) => {
  if (includeReadingTime) {
    data.time = readingTime(data.body);
  }

  return (
    <a className={joinClassNames(styles.card, "shadowBottom")} href={data.link} target="_blank">
      <img src={data.image} />
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            {data.title}
          </h3>
          <p className={styles.date}>
            {data.date} {data.time && `${BULLET_POINT} ${data.time} read`}
          </p>
          <p className={styles.body}>
            {data.body}
          </p>
        </div>
        <div className={styles.chips}>
          {data.tags.map((tag, index) => {
            const isTagATool = isToolInfo(tag);
            return (
              <Chip
                key={index}
                label={isTagATool ? tag.name : tag}
                color={isTagATool ? tag.color : undefined}
              />
            );
          })}
        </div>
      </div>
    </a>
  );
}

export default Card;