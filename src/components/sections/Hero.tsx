import styles from './Hero.module.css';
import { Icon, IconType } from '../icons/Icon';
import GlitchedText from '../text/GlitchedText';
import ScrollToButton from '../../components/buttons/ScrollToButton';
import { CustomTooltip } from '../../components/text/CustomTooltip';
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
          Upcoming Computer Science graduate from the University of Calgary
          <br />
          Dedicated to crafting secure, resilient solutions for clients
        </div>
        <div className={styles.icons}>
          <CustomTooltip text="LinkedIn" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.linkedinIcon}`}
              type={IconType.LINKEDIN}
              href="https://ca.linkedin.com/in/anil-mawji"
            />
          </CustomTooltip>
          <CustomTooltip text="GitHub" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.githubIcon}`}
              type={IconType.GITHUB}
              href="https://github.com/anilmawji"
            />
          </CustomTooltip>
          <CustomTooltip text="Stack Overflow" distance="20px" width="110px">
            <Icon
              className={`${styles.icon} ${styles.soIcon}`}
              type={IconType.STACK_OVERFLOW}
              href="https://stackoverflow.com/users/8902167/anil-m"
            />
          </CustomTooltip>
          <CustomTooltip text="TryHackMe" distance="20px">
            <Icon
              className={`${styles.icon} ${styles.thmIcon}`}
              type={IconType.TRYHACKME}
              href="https://tryhackme.com/p/zxphyr"
            />
          </CustomTooltip>
          <CustomTooltip text="Hack The Box" distance="20px" width="100px">
            <Icon
              className={`${styles.icon} ${styles.htbIcon}`}
              type={IconType.HACK_THE_BOX}
              href="https://app.hackthebox.com/profile/2024905/"
            />
          </CustomTooltip>
        </div>
        <div className={styles.scrollButtonContainer}>
          <CustomTooltip text="Scroll down" width="90px" distance="10px">
            <ScrollToButton
              className={styles.scrollButton}
              size={45}
              rotation={180}
              hoverColor="white"
              color="#c6c6c6"
              scrollLocation="/#skills"
            />
          </CustomTooltip>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;