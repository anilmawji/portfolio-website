import styles from './Certifications.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { CertificationData } from '../../data/CertificationData';

interface Props {
  className?: string;
}

const CertificationsSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.container, globalStyles.sectionBlock, className)} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      {CertificationData.map((data, i) => (
        <div>

        </div>
        // <HeaderPanel className={styles.cert} key={i} data={data} />
      ))}
    </section>
  );
}

export default CertificationsSection;
