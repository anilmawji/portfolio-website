import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page title="About Me">
      <div className="aboutSections">
        <div className="bioSection">
          <BioSection className="glowBorder" />
        </div>
        <ContactSection className="contactSection shadowBottom" />
      </div>
    </Page>
  );
}

export default About;