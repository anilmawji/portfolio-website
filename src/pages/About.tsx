import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';
import { joinClassNames } from '../utils';

const About = () => {
  return (
    <Page title="About Me" headerId="bio">
      <div className="about_sections">
        <BioSection className={joinClassNames("shadow", "animated_border")} />
        <ContactSection className={joinClassNames("shadow")} />
      </div>
    </Page>
  );
}

export default About;