import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';

const About = () => {
  return (
    <Page title="About Me">
      <div className="about_sections">
        <BioSection className="glow_border" />
        <ContactSection className="shadow_bottom" />
      </div>
    </Page>
  );
}

export default About;