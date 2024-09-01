import styles from './Bio.module.css';
import portrait from '../../assets/portrait.jpg';

const BioSection = () => {
  return (
    <section className={styles.bio}>
      <div className={styles.content}>
        <img className={styles.portrait} src={portrait} />
        <p>
          Hi, I'm Anil, a Computer Science student at the University of Calgary.
          <br />
          <br />
          My background includes experience as a systems administrator and a software developer in both the private and public sectors.
          I'm now diving into ethical hacking as I work towards earning my PJPT from TCM Security.
          <br />
          <br />
          I currently hold the following certifications:
          <ul>
            <li>
              <a href="https://www.credly.com/badges/e8b164ea-078d-4862-9346-a6ff8fd2547e" target="_blank">
                CompTIA Security+
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/79231690-ded9-4d5f-be98-7f74f4ebe95c" target="_blank">
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
          I'm always open to meeting new people, so feel free to reach out if you want to connect.
          Stay tuned for plenty of cybersecurity-related content!
        </p>
      </div>
      <a className={styles.stack_overflow} href="https://stackoverflow.com/users/8902167/anil" target="_blank">
        <img src="https://stackoverflow.com/users/flair/8902167.png?theme=dark" width="208" height="58" alt="Profile for Anil at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="Profile for Anil at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
      </a>
    </section>
  );
}

export default BioSection;