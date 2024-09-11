import styles from './CardContainer.module.css';
import Card from './Card';
import { useState } from 'react';
import { joinClassNames } from '../../utils';
import { Post } from '../../types';

interface Props {
  className?: string;
  title?: string;
  cardData: Post[];
  includeReadingTime?: boolean;
}

const CardContainer = ({ className, title, cardData, includeReadingTime }: Props) => {
  const [cards] = useState(cardData);

  return (
    <div className={joinClassNames(styles.container, className)}>
      {title && <h3 className={styles.title}>
        {title}
      </h3>}
      <div className={styles.cards}>
        {cards.map((data, i) => {
          return (
            <Card key={i} data={data} includeReadingTime={includeReadingTime} />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;