import styles from './Certifications.module.css';
import SvgAPlus from '../icons/SvgAPlus';
import SvgSecurityPlus from '../icons/SvgSecurityPlus';
import az_900 from '../../assets/certifications/az-900.png';

const CertificationsSection = () => {
  return (
    <section className={styles.certs}>
      <div className={styles.title}>
        Certifications
      </div>
      <div className={styles.container}>
        <div className={styles.badges}>
          <img src={az_900} className={styles.azure} />
          <img src={az_900} className={styles.azure} />
          <SvgAPlus className={styles.comptia} />
          <SvgSecurityPlus className={styles.comptia} />
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;