import styles from './Bio.module.css';
import portrait from '../../assets/me.jpg';
import { NavLink } from 'react-router-dom';
import { StackOverflowCard, SOCardTheme } from '../../components/card/StackOverflowCard';
import TryHackMeCard from '../../components/card/TryHackMeCard';
import { joinClassNames } from '../../utils';

const BioSection = () => {
  return (
    <div className={joinClassNames(styles.bio, "animated_border", "shadow")}>
      <div className={styles.content}>
        <div className={styles.portrait}>
          <img src={portrait} />
        </div>
        <div className={styles.text}>
          <p>
            Hi, I'm Anil, a Computer Science student at the University of Calgary.
            <br /><br />
            My journey in tech has led me through roles as a systems administrator and software developer.
            I've had the privilege of working at&nbsp;
            <a href="https://www.starburst.io/" target="_blank">a unicorn startup</a>,&nbsp;
            <a href="https://www.arcurve.com/" target="_blank">a software development company</a> and the federal government.
            Currently, I'm exploring the world of ethical hacking as I work towards earning my&nbsp;
            <a href="https://certifications.tcm-sec.com/pjpt/" target="_blank">PJPT certification</a>.
            <br /><br />
            Some of the certifications I hold:
          </p>
          <ul>
            <li>
              <a href="https://www.credly.com/badges/79231690-ded9-4d5f-be98-7f74f4ebe95c" target="_blank">CompTIA Security+</a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/e8b164ea-078d-4862-9346-a6ff8fd2547e" target="_blank">CompTIA A+</a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/d63c2487-af0c-4141-a69f-f2b17d503b47" target="_blank">Microsoft Azure Fundamentals (AZ-900)</a>
            </li>
          </ul>
          <p>
            <br />
            I'm very passionate about cybersecurity and always eager to connect with others in the field.
            Feel free to&nbsp;
            <NavLink to="/about#contact">reach out</NavLink> if you'd like to chat or collaborate, and stay tuned for&nbsp;
            <NavLink to="/blog#posts">interesting content</NavLink>!
          </p>
        </div>
      </div>
      <div className={styles.profiles}>
        <StackOverflowCard user_id="8902167" theme={SOCardTheme.Dark} />
        <TryHackMeCard username="Cyb3rHusky" />
      </div>
    </div>
  );
}

export default BioSection;