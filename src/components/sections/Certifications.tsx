import styles from './Certifications.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { Certifications } from '../../data/CertificationData';
import { ReactCSSVariables } from '../../utils';
import { Icon, IconType } from '../../components/icons/Icon';

interface Props {
  className?: string;
}

const CertificationsSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.container, globalStyles.sectionBlock, className)} id="certifications">
      <h2 className={styles.sectionTitle}>Certifications</h2>
      {Certifications.map((data, i) => {
        const imageBorderStyle: ReactCSSVariables = {
          '--logo-padding': data.imagePadding
        };
        return (
          <a key={i} className={joinClassNames(styles.panel, globalStyles.hoverUnderlineTrigger)} href={data.link} target="_blank">
            <div className={styles.imageBorder} style={imageBorderStyle}>
              <img src={data.image} alt={`${data.name} logo`} />
            </div>
            <div className={styles.header}>
              <div className={`${styles.name} ${globalStyles.hoverUnderlineReceiver}`}>
                <p>{data.name}</p>
              </div>
              <Icon className={styles.icon} type={IconType.OPEN_EXTERNAL} />
            </div>
          </a>
        );
      })}
    </section>
  );
}

export default CertificationsSection;
