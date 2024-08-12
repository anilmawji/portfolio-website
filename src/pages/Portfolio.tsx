import styles from './Portfolio.module.css';
import CardContainer from '../components/CardContainer';
import Footer from '../components/sections/Footer';
import CircuitLine from '../components/CircuitLine';
import ProjectData from '../data/ProjectData';

const Portfolio = () => {
  return (
    <div className="page">
      <div className={styles.header}>
        <div className={styles.title}>
          Portfolio
        </div>
      </div>
      <div className={styles.container}>
        <CircuitLine className={styles.circuit} />
        <CardContainer
          className={styles.projects}
          cardData={ProjectData}
          includeReadingTime={false}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;