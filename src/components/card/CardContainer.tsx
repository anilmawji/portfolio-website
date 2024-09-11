import styles from './CardContainer.module.css';
import Card from './Card';
import { useState } from 'react';
import { joinClassNames } from '../../utils';
import { Post } from '../../types';

interface Props {
  className?: string;
  title?: string;
  cardData: Post[];
  includeReadTime?: boolean;
}

const CardContainer = ({ className, title, cardData, includeReadTime }: Props) => {
  const [cards] = useState(cardData);

  return (
    <div className={joinClassNames(styles.container, className)}>
      {title && <h3 className={styles.title}>
        {title}
      </h3>}
      <div className={styles.cards}>
        {cards.map((data, i) => {
          return (
            <Card key={i} data={data} includeReadTime={includeReadTime} />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;