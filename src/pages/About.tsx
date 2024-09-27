import globalStyles from '../global.module.scss';
import Page from './Page';
import ExperienceSection from '../components/sections/Experience';
import CertificationsSection from '../components/sections/Certifications';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page id="bio" title="About Me">
      <div className={globalStyles.sections}>
        <div className={globalStyles.bio}>
          <BioSection className={globalStyles.glowBorder} />
        </div>
        <ExperienceSection className={globalStyles.shadowBottom} />
        <CertificationsSection className={globalStyles.shadowBottom} />
      </div>
    </Page>
  );
}

export default About;