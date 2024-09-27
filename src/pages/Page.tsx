import styles from './Page.module.css';
import globalStyles from '../global.module.scss';
import Footer from '../components/sections/Footer';
import GlitchedText from '../components/text/GlitchedText';
import { joinClassNames } from '../utils';

interface Props {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  title?: string;
}

const Page = ({ className, children, id, title }: Props) => {
  return (
    <div
      id={id}
      className={joinClassNames(
        styles.page,
        className,
        globalStyles.gridBackground
      )}
    >
      <main>
        {title && (
          <header className={styles.header}>
            <div className={styles.titleContainer}>
              <hr className={styles.lineLeft} />
              <GlitchedText>
                <h4 className={styles.title}>
                  {title}
                </h4>
              </GlitchedText>
              <hr className={styles.lineRight} />
            </div>
          </header>
        )}
        <div
          className={joinClassNames(
            styles.content,
            title ? styles.contentMargin : ''
          )}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;