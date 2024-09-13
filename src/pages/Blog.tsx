import Page from './Page';
import BlogData from '../data/BlogData';
import CardContainer from '../components/card/CardContainer';

const Blog = () => {
  return (
    <Page className="blogPage" title="Blog Posts">
      <CardContainer
        className="cardContainer"
        title="Featured Blog Posts"
        cardData={BlogData}
        includeReadTime
      />
    </Page>
  );
}

export default Blog;