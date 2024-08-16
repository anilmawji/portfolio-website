import styles from './Page.module.css';
import Footer from '../components/Footer';
import CircuitLine from '../components/CircuitLine';
import { joinClassNames } from '../utils';

interface PropTypes {
  className?: string;
  headerId?: string;
  children?: React.ReactNode;
  title?: string;
  includeCircuitLine?: boolean;
}

const Page = ({ className, children, headerId, title, includeCircuitLine }: PropTypes) => {
  return (
    <div className={joinClassNames("page", className)}>
      <main>
        {title &&
          <header className={styles.header} id={headerId ? headerId : ""}>
            <div className={styles.title}>
              {title}
            </div>
          </header>
        }
        <div className={joinClassNames(styles.container, title ? styles.title_container : "")}>
          {includeCircuitLine && <CircuitLine className={styles.circuit} />}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;