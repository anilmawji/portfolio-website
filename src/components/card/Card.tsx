import styles from './Card.module.css';
import Chip from '../Chip';
import { readingTime } from '../../utils';
import { joinClassNames } from '../../utils';

const BULLET_POINT = String.fromCharCode(8226);

type CardData = {
  title: string;
  image: string;
  date: string;
  body: string;
  link: string;
  tags: string[];
  time?: string;
}

interface PropTypes {
  data: CardData;
  includeReadingTime?: boolean;
}

const Card = ({ data, includeReadingTime }: PropTypes) => {
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
            {data.date} {data.time && `${BULLET_POINT} ${data.time}`}
          </p>
          <p className={styles.body}>
            {data.body}
          </p>
        </div>
        <div className={styles.chips}>
          {data.tags.map((tag, index) =>
            <Chip key={index} label={tag} />
          )}
        </div>
      </div>
    </a>
  );
}

export { Card, type CardData }