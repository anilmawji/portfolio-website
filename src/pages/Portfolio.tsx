import Page from './Page';
import CardContainer from '../components/card/CardContainer';
import ProjectData from '../data/ProjectData';

const Portfolio = () => {
  return (
    <Page title="Portfolio" headerId="projects" includeCircuitLine>
      <CardContainer
        className="portfolio_cards"
        cardData={ProjectData}
        includeReadingTime={false}
      />
    </Page>
  );
}

export default Portfolio;