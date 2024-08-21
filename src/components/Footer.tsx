import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import ScrollToTopButton from './buttons/ScrollToTopButton';

interface FooterItemPropTypes {
  text: string;
  url: string;
  icon?: string;
}

const FooterItem = ({ text, url, icon, ...restProps }: FooterItemPropTypes) => {
  const isInternalLink = url.startsWith('/');

  return (
    <li>
      <NavLink to={url} target={isInternalLink ? "_self" : "_blank"} {...restProps}>
        {text}
      </NavLink>
    </li>
  );
}

interface FooterItemListPropTypes {
  title: string;
  links: Record<string, string>;
}

const FooterItemList = ({ title, links }: FooterItemListPropTypes) => {
  return (
    <div className={styles.list}>
      <h3>{title.toUpperCase()}</h3>
      <ul className={styles.links}>
        {Object.keys(links).map((name, index) => (
          <FooterItem key={index} text={name} url={links[name]} />
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className={styles.button}>
        <ScrollToTopButton />
      </div>
      <div className={styles.content}>
        <FooterItemList
          title={"Navigation"}
          links={{
            "Home": "/",
            "Portfolio": "/portfolio",
            "About": "/about#bio",
            "Contact": "/about#contact",
            "Blog": "/blog"
          }}
        />
        <FooterItemList
          title={"Profiles"}
          links={{
            "LinkedIn": "https://ca.linkedin.com/in/anil-mawji",
            "HackTheBox": "https://www.hackthebox.com/",
            "TryHackMe": "https://tryhackme.com/",
            "GitHub": "https://github.com/anilmawji",
            "Stack Overflow": "https://stackoverflow.com/users/8902167/anil-m"
          }}
        />
        <FooterItemList
          title={"External Files"}
          links={{
            "Resume": "",
            "Website License": ""
          }}
        />
      </div>
      <p className={styles.copyright}>
        &#169; 2024 Anil Mawji
      </p>
    </footer>
  );
}

export default Footer;