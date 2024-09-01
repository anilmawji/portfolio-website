import styles from './Blog.module.css';
import Page from './Page';

const Blog = () => {
  return (
    <Page className={styles.page} title="Blog Posts" headerId="posts">
      <p>This page is a work in progress. Please come back later!</p>
    </Page>
  );
}

export default Blog;