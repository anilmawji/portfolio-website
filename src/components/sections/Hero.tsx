import styles from './Hero.module.css';
import { Icon, IconType } from '../icons/Icon';
import GlitchedText from '../text/GlitchedText';
import ScrollToButton from '../../components/buttons/ScrollToButton';
import { Tooltip } from '../../components/text/Tooltip2';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
}

const HeroSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      <GlitchedText>
        <Icon
          className={`${styles.bracket} ${styles.bracketLeft}`}
          type={IconType.BRACKET_LEFT}
        />
        <h4 className={styles.name}>Anil Mawji</h4>
        <Icon
          className={`${styles.bracket} ${styles.bracketRight}`}
          type={IconType.BRACKET_RIGHT}
        />
      </GlitchedText>
      <div className={styles.body}>
        <h2 className={styles.title}>
          Software Developer
        </h2>
        <div className={styles.bio}>
          Computer Science student at the University of Calgary
          <br />
          dedicated to crafting secure, resilient solutions for clients
        </div>
        <div className={styles.icons}>
          <Tooltip text="LinkedIn" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.linkedinIcon}`}
              type={IconType.LINKEDIN}
              href="https://ca.linkedin.com/in/anil-mawji"
            />
          </Tooltip>
          <Tooltip text="GitHub" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.githubIcon}`}
              type={IconType.GITHUB}
              href="https://github.com/anilmawji"
            />
          </Tooltip>
          <Tooltip text="Stack Overflow" distance="20px" width="110px">
            <Icon
              className={`${styles.icon} ${styles.soIcon}`}
              type={IconType.STACK_OVERFLOW}
              href="https://stackoverflow.com/users/8902167/anil-m"
            />
          </Tooltip>
          <Tooltip text="TryHackMe" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.thmIcon}`}
              type={IconType.TRYHACKME}
              href="https://tryhackme.com/p/zxphyr"
            />
          </Tooltip>
          <Tooltip text="Hack The Box" distance="20px" width="100px">
            <Icon
              className={`${styles.icon} ${styles.htbIcon}`}
              type={IconType.HACK_THE_BOX}
              href="https://app.hackthebox.com/profile/2024905/"
            />
          </Tooltip>
        </div>
        <div className={styles.scrollButtonContainer}>
          <Tooltip text="Scroll down" width="90px" distance="10px">
            <ScrollToButton
              className={styles.scrollButton}
              size={45}
              rotation={180}
              hoverColor="white"
              color="#c6c6c6"
              scrollLocation="/#projects"
            />
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;