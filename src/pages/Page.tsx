import styles from './Page.module.css';
import Footer from '../components/sections/Footer';
import GlitchedText from '../components/text/GlitchedText';
import { joinClassNames } from '../utils';

interface PropTypes {
  className?: string;
  headerId?: string;
  children?: React.ReactNode;
  title?: string;
}

const Page = ({ className, children, headerId, title }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.page, className)}>
      <main>
        {title && <header className={styles.header} id={headerId ? headerId : ""}>
          <div className={styles.titleContainer}>
            <hr className={styles.lineLeft} />
            <GlitchedText>
              <h4 className={styles.title}>{title}</h4>
            </GlitchedText>
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