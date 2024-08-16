import styles from './Certifications.module.css';
import SvgAPlus from '../icons/SvgAPlus';
import SvgSecurityPlus from '../icons/SvgSecurityPlus';
import az_900 from '../../assets/certifications/az-900.png'

const CertificationsSection = () => {
  return (
    <div>
      <SvgAPlus className={styles.badge} />
      <SvgSecurityPlus className={styles.badge} />
      <img src={az_900} className={styles.az} />
      Experience
      Education
    </div>
  );
}

export default CertificationsSection;