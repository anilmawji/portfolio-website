import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page title="About Me">
      <div className="aboutSections">
        <BioSection className="glowBorder" />
        <ContactSection className="shadowBottom" />
      </div>
    </Page>
  );
}

export default About;