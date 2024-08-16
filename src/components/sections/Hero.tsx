import styles from './Hero.module.css';
import IconLink, { IconType } from '../icons/IconLink';

const ICON_SIZE = 24;

interface PropTypes {
  className?: string;
}

const HeroSection = ({ className }: PropTypes) => {
  const combinedClassName = `${styles.header} ${className ?? ""}`.trim();

  return (
    <header className={combinedClassName}>
      <div className={styles.name}>
        <svg className={styles.bracket} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        {"Anil Mawji"}
        <svg className={styles.bracket} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </div>
      <div className={styles.title}>
        {"Cybersecurity Analyst"}
      </div>
      <div className={styles.bio}>
        Fifth year Computer Science student at the University of Calgary.
        <br />
        Cybersecurity professional with a passion for all things technology.
      </div>
      <div className={styles.icons}>
        <IconLink
          className={styles.icon}
          iconSize={ICON_SIZE}
          type={IconType.LINKEDIN}
          href="https://ca.linkedin.com/in/anil-mawji"
        />
        <IconLink
          className={styles.icon}
          iconSize={ICON_SIZE}
          type={IconType.HACKTHEBOX}
          href="https://www.hackthebox.com/"
        />
        <IconLink
          className={styles.icon}
          iconSize={ICON_SIZE}
          type={IconType.TRYHACKME}
          href="https://tryhackme.com/"
        />
        <IconLink
          className={styles.icon}
          iconSize={ICON_SIZE}
          type={IconType.GITHUB}
          href="https://github.com/anilmawji"
        />
        <IconLink
          className={styles.icon}
          iconSize={ICON_SIZE}
          type={IconType.STACKOVERFLOW}
          href="https://stackoverflow.com/users/8902167/anil-m"
        />
      </div>
    </header>
  );
}

export default HeroSection;