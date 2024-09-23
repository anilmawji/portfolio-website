import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { CertificationData } from '../../data/CertificationData';
import AccordionContainer from '../accordion/AccordionContainer';

interface Props {
  className?: string;
}

const CertificationsSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(globalStyles.sectionBlock, className)} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <AccordionContainer className={styles.certs} accordionData={CertificationData}>
        <div>
          This is some test text
        </div>
      </AccordionContainer>
    </section>
  );
}

export default CertificationsSection;
