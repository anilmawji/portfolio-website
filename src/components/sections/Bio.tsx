import styles from './Bio.module.css';
import portrait from '../../assets/me.jpg';
import { StackOverflowCard, SOCardTheme } from '../../components/card/StackOverflowCard';
import TryHackMeCard from '../../components/card/TryHackMeCard';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
}

const BioSection = ({ className }: PropTypes) => {
  return (
    <div className={joinClassNames(className, styles.bio)}>
      <div className={styles.content}>
        <div className={styles.portrait}>
          <img src={portrait} />
        </div>
        <div className={styles.text}>
          <p>
            Hi, I'm Anil, a Computer Science student at the <a href="https://www.ucalgary.ca/" target="_blank">University of Calgary</a> with a deep passion for cyber security.
            <br /><br />
            My love for technology began like many others; playing video games! But once I stumbled across <a href="https://en.wikipedia.org/wiki/Cheat_Engine" target="_blank">one fun little program</a>,
            I learned that you could break them, too. Ever since then, my curiosity for the digital world has only grown.
            <br /><br />
            Fast forward to today, and I've had the privilege of working at <a href="https://www.starburst.io/" target="_blank">a unicorn startup</a>, <a href="https://www.arcurve.com/" target="_blank">a software development company</a> and the <a href="https://www.canada.ca/en.html" target="_blank">federal government</a>.
            Now, I'm diving into the world of ethical hacking as I work towards earning my <a href="https://certifications.tcm-sec.com/pjpt/" target="_blank">PJPT certification.</a>
            <br /><br />
            Here are some of the certifications I've picked up so far:
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