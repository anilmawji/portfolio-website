import styles from './Bio.module.css';
import portrait from '../../assets/portrait.jpg';

const BioSection = () => {
  return (
    <section className={styles.bio}>
      <img src={portrait} />
      <p>
        Hi, I'm Anil, a Computer Science student at the University of Calgary.
        <br />
        <br />
        My background includes hands-on experience in both the public and private sectors as a systems administrator and a software developer.
        I'm now diving into ethical hacking as I work towards earning my PJPT from TCM Security.
        <br />
        <br />
        Currently, I hold the following certifications:
        <ul>
          <li>CompTIA A+</li>
          <li>CompTIA Security+</li>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
        </ul>
        <br />
        I'm always open to meeting new people, so feel free to reach out if you want to connect.
        Stay tuned for plenty of cybersecurity-related content!
      </p>
    </section>
  );
}

export default BioSection;