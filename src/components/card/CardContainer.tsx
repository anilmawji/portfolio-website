import styles from './CardContainer.module.css';
import Card from './Card';
import { useState } from 'react';
import { joinClassNames } from '../../utils';
import { Post } from '../../types';

interface Props {
  id?: string;
  className?: string;
  title?: string;
  cardData: Post[];
  includeReadTime?: boolean;
}

const CardContainer = ({ id, className, title, cardData, includeReadTime }: Props) => {
  const [cards] = useState(cardData);

  return (
    <div id={id} className={joinClassNames(styles.container, className)}>
      {title && (
        <h3 className={styles.title}>
          {title}
        </h3>
      )}
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