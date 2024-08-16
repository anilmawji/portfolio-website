import styles from './CardContainer.module.css';
import Chip from './Chip';
import { useState } from 'react';
import { readingTime } from '../utils';

const BULLET_POINT = String.fromCharCode(8226);

type Card = {
  title: string;
  image: string;
  date: string;
  body: string;
  link: string;
  tags: string[];
}

const initCards = (cards: Card[]) => {
  return cards.map(card => ({
    ...card,
    readingTime: readingTime(card.body)
  }));
}

interface PropTypes {
  className?: string;
  cardData: Card[];
  includeReadingTime?: boolean;
}

const CardContainer = ({ className, cardData, includeReadingTime = true }: PropTypes) => {
  const combinedClassName = `${styles.container} ${className}`;
  const [cards] = useState(includeReadingTime ? initCards(cardData) : cardData);

  return (
    <div className={combinedClassName}>
      <div className={styles.cards}>
        {cards.map((card, i) => {
          return (
            <a key={i} className={styles.card} href={card.link} target="_blank">
              <img src={card.image} />
              <div className={styles.content}>
                <div className={styles.text}>
                  <h3 className={styles.title}>
                    {card.title}
                  </h3>
                  <p className={styles.date}>
                    {card.date} {'readingTime' in card && `${BULLET_POINT} ${card.readingTime}`}
                  </p>
                  <p className={styles.body}>
                    {card.body}
                  </p>
                </div>
                <div className={styles.chips}>
                  {card.tags.map((tag, index) => (
                    <Chip key={index} label={tag} />
                  ))}
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  );
}

export default CardContainer;