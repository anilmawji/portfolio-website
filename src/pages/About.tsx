import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';
import { useState, useEffect } from 'react';
import { joinClassNames } from '../utils';
import useThrottle from '../hooks/useThrottle';

const About = () => {
  const [invisibleBorder, setInvisibleBorder] = useState(false);
  const throttledInvisibleBorder = useThrottle(invisibleBorder, 500);

  const handleScroll = () => {
    setInvisibleBorder(window.scrollY >= 350);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <Page title="About Me" headerId="bio">
      <div className="about_sections">
        <BioSection className={joinClassNames(throttledInvisibleBorder ? "invisible_border" : "", "animated_border", "shadow")} />
        <ContactSection className={joinClassNames(!throttledInvisibleBorder ? "invisible_border" : "", "animated_border", "shadow")} />
      </div>
    </Page>
  );
}

export default About;