import styles from './Bio.module.css';
import globalStyles from '../../global.module.css';
import portrait from '../../assets/me.jpg';
import { StackOverflowCard, SOCardTheme } from '../../components/card/StackOverflowCard';
import TryHackMeCard from '../../components/card/TryHackMeCard';
import { NavLink } from 'react-router-dom';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
}

const BioSection = ({ className }: Props) => {
  return (
    <div className={joinClassNames(styles.bio, className)}>
      <div className={styles.content}>
        <div className={styles.portrait}>
          <img src={portrait} />
        </div>
        <div className={styles.text}>
          <p>
            Hi, I'm Anil, a software developer with a deep passion for cyber security.
            <br /><br />
            My love for technology began like many others; playing video games! But once I stumbled across <a className={globalStyles.hoverUnderline} href="https://en.wikipedia.org/wiki/Cheat_Engine" target="_blank">this fun little program</a> as a kid,
            I learned how to break games, too. Fast forward to today, and I've had the privilege of working at <a className={globalStyles.hoverUnderline} href="https://www.starburst.io/" target="_blank">a unicorn start-up</a>, <a className={globalStyles.hoverUnderline} href="https://www.arcurve.com/" target="_blank">a software services company</a> and
            the <a className={globalStyles.hoverUnderline} href="https://www.canada.ca/en.html" target="_blank">federal government.</a> Currently,
            I'm diving into the world of ethical hacking as I work towards earning my <a className={globalStyles.hoverUnderline} href="https://certifications.tcm-sec.com/pjpt/" target="_blank">PJPT certification.</a>
            <br /><br />
            Here are some of the certifications I've picked up so far:
          </p>
          <ul>
            <li>
              <a className={globalStyles.hoverUnderline} href="https://www.credly.com/badges/79231690-ded9-4d5f-be98-7f74f4ebe95c" target="_blank">CompTIA Security+</a>
            </li>
            <li>
              <a className={globalStyles.hoverUnderline} href="https://www.credly.com/badges/e8b164ea-078d-4862-9346-a6ff8fd2547e" target="_blank">CompTIA A+</a>
            </li>
            <li>
              <a className={globalStyles.hoverUnderline} href="https://www.credly.com/badges/d63c2487-af0c-4141-a69f-f2b17d503b47" target="_blank">Microsoft Azure Fundamentals (AZ-900)</a>
            </li>
          </ul>
          <p>
            <br />
            When I'm not at my computer, I enjoy hiking, swimming and going out for a bite with friends.
            I'm always open to connecting with fellow tech enthusiasts, so feel free to <NavLink className={globalStyles.hoverUnderline} to="/about#contact">reach out</NavLink> if you'd like to chat!
          </p>
        </div>
      </div>
      <div className={styles.profiles}>
        <StackOverflowCard user_id="8902167" theme={SOCardTheme.DARK} />
        <TryHackMeCard username="zxphyr" />
      </div>
    </div>
  );
}

export default BioSection;