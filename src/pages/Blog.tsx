import Page from './Page';
import globalStyles from '../global.module.scss';
import { BlogPosts } from '../data/BlogData';
import CardContainer from '../components/card/CardContainer';

const Blog = () => {
  return (
    <Page className={globalStyles.blogPage} title="Blog" id="featured">
      <CardContainer
        className={globalStyles.cardContainer}
        title="Featured Posts"
        cardData={BlogPosts}
        includeReadTime
      />
    </Page>
  );
}

export default Blog;