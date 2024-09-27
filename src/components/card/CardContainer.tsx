import styles from './CardContainer.module.css';
import { Card, CardData } from './Card';
import { useState } from 'react';
import { joinClassNames } from '../../utils';

interface Props {
  id?: string;
  className?: string;
  title?: string;
  cardData: CardData[];
  includeReadTime?: boolean;
}

const CardContainer = ({ id, className, title, cardData, includeReadTime }: Props) => {
  const [cards] = useState(cardData);

  return (
    <div id={id} className={joinClassNames(styles.container, className)}>
      {title && (
        <h2 className={styles.title}>{title}</h2>
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