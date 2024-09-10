import styles from './Portfolio.module.css';
import Page from './Page';
import CardContainer from '../components/card/CardContainer';
import ProjectData from '../data/ProjectData';
import CircuitLine from '../components/CircuitLine';

const Portfolio = () => {
  return (
    <Page title="Portfolio">
      <div className={styles.container}>
        <div className={styles.leftBorder}>
          <CircuitLine className={styles.circuit} />
        </div>
        <CardContainer className={styles.projects} cardData={ProjectData} />
      </div>
    </Page>
  );
}

export default Portfolio;