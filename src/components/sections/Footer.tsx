import styles from './Footer.module.css';
import globalStyles from '../../global.module.scss';
import ScrollToButton from '../buttons/ScrollToButton';
import CustomNavLink from '../nav/CustomNavLink';
import { CustomTooltip, TooltipDirection } from '../../components/text/CustomTooltip';
import { isPage } from '../../utils';

interface FooterItemListProps {
  title: string;
  links: Record<string, string>;
}

const FooterItemList = ({ title, links }: FooterItemListProps) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <ul className={styles.links}>
        {Object.keys(links).map((name, index) => (
          <li key={index}>
            <CustomNavLink
              className={globalStyles.hoverUnderline}
              to={links[name]}
              label={name}
              target={isPage(links[name]) ? '_self' : '_blank'}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className={globalStyles.shadowTopLight}>
      <div className={styles.buttonContainer}>
        <CustomTooltip text="Back to top" direction={TooltipDirection.TOP} width="90px" distance="22px">
          <ScrollToButton
            className={styles.button}
            size={38}
            scrollLocation={0}
            includeRing
          />
        </CustomTooltip>
      </div>
      <div className={styles.content}>
        <div className={styles.footerLists}>
          <FooterItemList
            title={"Navigation"}
            links={{
              "Home": "/#hero",
              "Skills": "/#skills",
              "Projects": "/#projects",
              "About": "/about#bio",
              "Experience": "/about#experience",
              "Certifications": "/about#certs",
              "Contact": "/contact",
              // "Blog": "/blog#featured"
            }}
          />
          <FooterItemList
            title={"Socials"}
            links={{
              "LinkedIn": "https://ca.linkedin.com/in/anil-mawji",
              "GitHub": "https://github.com/anilmawji",
              "Stack Overflow": "https://stackoverflow.com/users/8902167/anil-m",
              "TryHackMe": "https://tryhackme.com/p/zxphyr",
              "HackTheBox": "https://app.hackthebox.com/profile/2024905/"
            }}
          />
          <FooterItemList
            title={"External Files"}
            links={{
              "Resume": "https://drive.google.com/file/d/1APe_KQg8gz7xHlVG5HbKEOe0jlU8fhem/view",
              "Website License": "https://github.com/anilmawji/personal-website/blob/main/LICENSE"
            }}
          />
        </div>
        <hr className={styles.line}/>
        <p className={styles.copyright}>
          &copy; 2024 site designed & built by Anil Mawji.
          <br/>
          Hosting provided by Cloudflare.
          <br/>
          Super Mario&trade; is a trademark of Nintendo Co., Ltd. which does not sponsor, authorize or endorse this site.
          <br/>
          All other trademarks are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}

export default Footer;