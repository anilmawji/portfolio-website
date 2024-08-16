import styles from './Page.module.css';
import Footer from '../components/sections/Footer';
import CircuitLine from '../components/CircuitLine';

interface PropTypes {
  className?: string;
  headerId?: string;
  children?: React.ReactNode;
  title?: string;
  includeCircuitLine?: boolean;
}

const Page = ({ className, children, headerId, title, includeCircuitLine }: PropTypes) => {
  const combinedClassName = `page ${className ?? ""}`;

  return (
    <div className={combinedClassName}>
      <main>
        {title &&
          <header className={styles.header} id={headerId ? headerId : ""}>
            <div className={styles.title}>
              {title}
            </div>
          </header>
        }
        <div className={`${styles.container} ${title && styles.title_container}`}>
          {includeCircuitLine && <CircuitLine className={styles.circuit} />}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;