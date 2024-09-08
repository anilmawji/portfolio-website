import styles from './Hero.module.css';
import Icon, { IconType } from '../icons/Icon';
import { getCssValue } from '../../utils';
import { joinClassNames } from '../../utils';

const ICON_SIZE = 24;

interface PropTypes {
  className?: string;
}

const HeroSection = ({ className }: PropTypes) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      <header className={styles.name}>
        <Icon className={styles.bracket} type={IconType.BRACKET_LEFT} size="2rem" />
        {"Anil Mawji"}
        <Icon className={styles.bracket} type={IconType.BRACKET_RIGHT} size="2rem" />
      </header>
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
          size={ICON_SIZE}
          href="https://ca.linkedin.com/in/anil-mawji"
          hoverColor={getCssValue("linkedin-color")}
        />
        <Icon
          className={styles.icon}
          type={IconType.HACK_THE_BOX}
          size={ICON_SIZE}
          href="https://www.hackthebox.com/"
          hoverColor={getCssValue("neon-green2")}
        />
        <Icon
          className={styles.icon}
          type={IconType.TRYHACKME}
          size={ICON_SIZE}
          href="https://tryhackme.com/"
          hoverColor={getCssValue("tryhackme-color")}
        />
        <Icon
          className={styles.icon}
          type={IconType.GITHUB}
          size={ICON_SIZE}
          href="https://github.com/anilmawji"
          hoverColor="white"
        />
        <Icon
          className={styles.icon}
          type={IconType.STACK_OVERFLOW}
          size={ICON_SIZE}
          href="https://stackoverflow.com/users/8902167/anil-m"
          hoverColor={getCssValue("stack-overflow-color")}
        />
      </div>
    </section>
  );
}

export default HeroSection;