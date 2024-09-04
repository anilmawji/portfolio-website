import Page from './Page';
import CardContainer from '../components/card/CardContainer';
import ProjectData from '../data/ProjectData';
import styles from '../pages/Portfolio.module.css';

const Portfolio = () => {
  return (
    <Page title="Portfolio" headerId="projects" includeCircuitLine>
      <CardContainer
        className={styles.projects}
        cardData={ProjectData}
        includeReadingTime={false}
      />
    </Page>
  );
}

export default Portfolio;