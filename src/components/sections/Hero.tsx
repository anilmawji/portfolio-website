import styles from './Hero.module.css';
import Icon, { IconType } from '../icons/Icon';
import { getCssValue } from '../../utils';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
}

const HeroSection = ({ className }: PropTypes) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      <h3 className={styles.name}>
        <Icon className={joinClassNames(styles.bracket, styles.bracketLeft)} type={IconType.BRACKET_LEFT} />
        {"Anil Mawji"}
        <Icon className={joinClassNames(styles.bracket, styles.bracketRight)} type={IconType.BRACKET_RIGHT} />
      </h3>
      <div className={styles.body}>
        <div className={styles.title}>
          {"Cybersecurity Analyst"}
        </div>
        <div className={styles.bio}>
          Fifth year Computer Science student at the University of Calgary.
          <br />
          Cybersecurity professional with a passion for all things technology.
        </div>
        <div className={styles.icons}>
          <Icon
            className={styles.icon}
            type={IconType.LINKEDIN}
            href="https://ca.linkedin.com/in/anil-mawji"
            hoverColor={getCssValue("linkedin-color")}
          />
          <Icon
            className={styles.icon}
            type={IconType.HACK_THE_BOX}
            href="https://www.hackthebox.com/"
            hoverColor={getCssValue("neon-green2")}
          />
          <Icon
            className={styles.icon}
            type={IconType.TRYHACKME}
            href="https://tryhackme.com/"
            hoverColor={getCssValue("tryhackme-color")}
          />
          <Icon
            className={styles.icon}
            type={IconType.GITHUB}
            href="https://github.com/anilmawji"
            hoverColor="white"
          />
          <Icon
            className={styles.icon}
            type={IconType.STACK_OVERFLOW}
            href="https://stackoverflow.com/users/8902167/anil-m"
            hoverColor={getCssValue("stack-overflow-color")}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;