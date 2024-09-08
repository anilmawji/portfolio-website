import Page from './Page';
import CardContainer from '../components/card/CardContainer';
import ProjectData from '../data/ProjectData';

const Portfolio = () => {
  return (
    <Page title="Portfolio" includeCircuitLine>
      <CardContainer className="projects" cardData={ProjectData} />
    </Page>
  );
}

export default Portfolio;