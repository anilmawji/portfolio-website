// import { useEffect, useRef } from 'react';
// import styles from './HoverCard.module.css';

// const BorderHoverEffect = () => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (ev: MouseEvent) => {
//     const card = cardRef.current;
//     if (card) {
//       const blob = card.querySelector(`.${styles.blob}`);
//       const fblob = card.querySelector(`.${styles.fakeblob}`);
//       const rec = fblob.getBoundingClientRect();
//       blob.style.opacity = "1";

//       blob.animate(
//         [
//           {
//             transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)}px, ${(ev.clientY - rec.top) - (rec.height / 2)}px)`
//           }
//         ],
//         {
//           duration: 300,
//           fill: "forwards"
//         }
//       );
//     }
//   };

//   useEffect(() => {
//     const handleMouseMoveGlobal = (ev: MouseEvent) => {
//       handleMouseMove(ev);
//     };

//     window.addEventListener("mousemove", handleMouseMoveGlobal);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMoveGlobal);
//     };
//   }, []);

//   return (
//     <div ref={cardRef} className={styles.card}>
//       <div className={styles.blob}></div>
//       <div className={styles.fakeblob}></div>
//       <div className={styles.inner}>
//         Hover over me!
//       </div>
//     </div>
//   );
// };

// export default BorderHoverEffect;