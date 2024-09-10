import styles from './Page.module.css';
import Footer from '../components/Footer';
import { joinClassNames } from '../utils';

interface PropTypes {
  className?: string;
  headerId?: string;
  children?: React.ReactNode;
  title?: string;
  includeCircuitLine?: boolean;
}

const Page = ({ className, children, headerId, title }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.page, className)}>
      <main>
        {title && <header className={styles.header} id={headerId ? headerId : ""}>
          <div className={styles.titleContainer}>
            <hr className={styles.lineLeft} />
            <h4 className={styles.title}>{title}</h4>
            <hr className={styles.lineRight} />
          </div>
        </header>}
        <div className={joinClassNames(styles.content, title ? styles.contentMargin : "")}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;