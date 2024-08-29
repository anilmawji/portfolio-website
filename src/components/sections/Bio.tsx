import styles from './Bio.module.css';
import portrait from '../../assets/portrait.jpg';

const BioSection = () => {
  return (
    <section className={styles.bio}>
      <p>
        Hi, I'm Anil, a Computer Science student at the University of Calgary.
        My background includes hands-on experience in both the public and private sectors as a systems administrator and a software developer.
        I'm now diving into ethical hacking as I work towards earning my PJPT from TCM Security.
        Currently, I hold the CompTIA A+, CompTIA Security+, AZ-900 and SC-900 certifications.
        I'm always open to meeting new people, so feel free to reach out if you want to connect.
        Stay tuned for plenty of cybersecurity-related content!
      </p>
      <img src={portrait} />
    </section>
  );
}

export default BioSection;