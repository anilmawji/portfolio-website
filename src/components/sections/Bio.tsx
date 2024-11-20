import styles from './Bio.module.css';
import globalStyles from '/src/global.module.scss';
import portrait from '/src/assets/me.jpg';
import { StackOverflowCard, SOCardTheme } from '../card/StackOverflowCard';
import TryHackMeCard from '../../components/card/TryHackMeCard';
import { CustomTooltip } from '../../components/text/CustomTooltip';
import { Link } from 'react-router-dom';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
}

const BioSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(globalStyles.sectionBlock, styles.bio, className)}>
      <div className={styles.content}>
        <div className={styles.portrait}>
          <img src={portrait} />
        </div>
        <div className={styles.text}>
          <p>
            Hi, I'm Anil, a software developer with a strong interest in cyber security.
            <br /><br />
            My tech journey started like many others&mdash; playing video games as a kid! One day I stumbled across <a className={`${styles.cheatEngineLink} ${globalStyles.hoverUnderline}`} href="https://en.wikipedia.org/wiki/Cheat_Engine" target="_blank">a fun little program</a> that
            could be used to break games, sparking my fascination with the idea of manipulating software to work in unexpected ways. I've always enjoyed building software, but from this, I learned that I also have a passion for dismantling it! Currently, I'm diving into ethical hacking as I work towards earning my first <a className={globalStyles.hoverUnderline} href="https://certifications.tcm-sec.com/pjpt/" target="_blank">penetration testing certification.</a>
            <br /><br />
            When I'm not at my computer, I enjoy reading, hiking, and going out for a bite with friends.
            Feel free to <Link className={globalStyles.hoverUnderline} to="/contact" onClick={() => window.scrollTo(0, 0)}>reach out</Link> if you'd  like to chat!
          </p>
        </div>
      </div>
      <div className={styles.profiles}>
        <CustomTooltip text="My profile at Stack Overflow, a forum for professional and enthusiast programmers" width='100%' visibilityDelay={300}>
          <StackOverflowCard user_id="8902167" theme={SOCardTheme.DARK} />
        </CustomTooltip>
        <CustomTooltip text="My profile at TryHackMe, a hands-on learning platform for cyber security, all through your browser!" width='100%' visibilityDelay={300}>
          <TryHackMeCard username="zxphyr" />
        </CustomTooltip>
      </div>
    </section>
  );
}

export default BioSection;