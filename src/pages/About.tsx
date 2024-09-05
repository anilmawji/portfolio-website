import Page from './Page';
import ContactSection from '../components/sections/Contact';
import BioSection from '../components/sections/Bio';
import { useState, useEffect } from 'react';
import { joinClassNames } from '../utils';
import useThrottle from '../hooks/useThrottle';

const About = () => {
  const [isBorderInvisible, setIsBorderInvisible] = useState(false);
  const throttledBorderVisibility = useThrottle(isBorderInvisible, 500);

  useEffect(() => {
    const handleScroll = () => setIsBorderInvisible(window.scrollY >= 350);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Page title="About Me" headerId="bio">
      <div className="about_sections">
        <BioSection
          className={joinClassNames(
            throttledBorderVisibility ? "invisible_border shadow" : "",
            "animated_border"
          )}
        />
        <ContactSection
          className={joinClassNames(
            !throttledBorderVisibility ? "invisible_border shadow" : "",
            "animated_border"
          )}
        />
      </div>
    </Page>
  );
}

export default About;