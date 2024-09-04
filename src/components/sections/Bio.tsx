import styles from './Bio.module.css';
import portrait from '../../assets/me.jpg';
import { joinClassNames } from '../../utils';

const BioSection = () => {
  return (
    <div className={joinClassNames(styles.bio, "shadow")}>
      <div className={styles.content}>
        <div className={styles.portrait}>
          <img src={portrait} />
        </div>
        <p>
          Hi, I'm Anil, a student studying Computer Science at the University of Calgary.
          <br />
          <br />
          My background includes experience as a systems administrator and a software developer.
          Over time, I've had the privilege of working at a unicorn start-up, a software development company and the federal government.
          Now I'm diving into ethical hacking as I work towards earning my PJPT.
          <br />
          <br />
          Here are some of the certifications I currently hold:
          <ul>
            <li>
              <a href="https://www.credly.com/badges/79231690-ded9-4d5f-be98-7f74f4ebe95c" target="_blank">
                CompTIA Security+
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/e8b164ea-078d-4862-9346-a6ff8fd2547e" target="_blank">
                CompTIA A+
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/d63c2487-af0c-4141-a69f-f2b17d503b47" target="_blank">
                Microsoft Azure Fundamentals (AZ-900)
              </a>
            </li>
          </ul>
          <br />
          I'm always open to meeting new people, so feel free to reach out if you want to connect, and stay tuned for plenty of cybersecurity-related content!
        </p>
      </div>
      <div className={styles.profiles}>
        <a href="https://stackoverflow.com/users/8902167/anil" target="_blank">
          <img src="https://stackoverflow.com/users/flair/8902167.png?theme=dark" width="208" height="58" alt="Profile for Anil at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="Profile for Anil at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
        </a>
        <a href="https://tryhackme.com/p/Cyb3rHusky" target="_blank">
          <img src="https://tryhackme-badges.s3.amazonaws.com/Cyb3rHusky.png" alt="TryHackMe"/>
        </a>
      </div>
    </div>
  );
}

export default BioSection;