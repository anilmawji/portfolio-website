import styles from './CardContainer.module.css';
import { Card, CardData } from './Card';
import { useState } from 'react';

interface PropTypes {
  className?: string;
  title?: string;
  cardData: CardData[];
  includeReadingTime?: boolean;
}

const CardContainer = ({ className, title, cardData, includeReadingTime }: PropTypes) => {
  const combinedClassName = `${styles.container} ${className}`;
  const [cards] = useState(cardData);

  return (
    <div className={combinedClassName}>
      {title && 
        <div className={styles.title}>
          {title}
        </div>
      }
      <div className={styles.cards}>
        {cards.map((data, i) => {
          return (
            <Card key={i} data={data} includeReadingTime={includeReadingTime}/>
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;