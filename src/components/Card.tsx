// import { useState, useEffect, useRef } from 'react'
// import Chip from './Chip';

// type CardData = {
//   title: string;
//   image: string;
//   date: string;
//   body: string;
//   link: string;
//   tags: string[];
// }

// interface PropTypes {
//   cardData: CardData;
// }

// const Card = ({ cardData }: PropTypes) => {
//   const bodyRef = useRef<HTMLParagraphElement>(null);
//   const [isOverflowing, setIsOverflowing] = useState(false);

//   useEffect(() => {
//     if (bodyRef.current) {
//       const isOverflow = bodyRef.current.scrollHeight > bodyRef.current.clientHeight;
//       setIsOverflowing(isOverflow);
//       console.log(bodyRef.current.scrollHeight, bodyRef.current.clientHeight);
//     }
//   }, [bodyRef.current]);

//   return (
//     <a className={styles.card} href={card.link} target="_blank">
//     <img src={cardData.image} />
//     <div className={styles.content}>
//       <div className={styles.text}>
//         <h3 className={styles.title}>
//           {cardData.title}
//         </h3>
//         <p className={styles.date}>
//           {cardData.date} &#8226; {card.readingTime}
//         </p>
//         <p className={styles.body} ref={bodyRef}>
//           {isOverflowing ? cardData.body.slice(0, -3) + "..." : cardData.body}
//         </p>
//       </div>
//       <div className={styles.tags}>
//         {cardData.tags.map((tag, index) => (
//           <Chip key={index} label={tag} />
//         ))}
//       </div>
//     </div>
//   </a>
//   )
// }

// export default Card