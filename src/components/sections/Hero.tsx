import styles from './Hero.module.css'
import iconstyles from '../icons/Logo.module.css'
import thmLogo from '../../assets/icons/thm-logo.png'
import Logo from '../icons/Logo'
import { LogoType } from '../icons/Logo'

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div>
        {"<ANIL MAWJI>"}
      </div>
      <div className={styles.bio}>
        Computer Science student and aspiring cyber security professional with a passion for all things technology.
      </div>
      <div className={styles.logos}>
        <Logo type={LogoType.LINKEDIN} href="https://ca.linkedin.com/in/anil-mawji" className={iconstyles["linkedin-bg"]} />
        <Logo type={LogoType.HACKTHEBOX} href="https://www.hackthebox.com/" />
        <Logo src={thmLogo} href="https://tryhackme.com/" alt="tryhackme logo" />
        <Logo type={LogoType.GITHUB} href="https://github.com/anilmawji" className={iconstyles["github-bg"]} />
        <Logo type={LogoType.STACKOVERFLOW} href="https://stackoverflow.com/users/8902167/anil-m"/>
      </div>
    </div>
  )
}

export default HeroSection