import ClickEventListener from '../ClickEventListener';
import styles from './CustomNavLink.module.css';
import { Link, LinkProps, NavLink, useLocation } from 'react-router-dom';

type LinkType = typeof NavLink | typeof Link;

interface PropTypes extends LinkProps {
  to: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}

const preventAnchorDrag = (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault();

const CustomNavLink = ({ to, label, className, children, ...restProps }: PropTypes) => {
  let CustomLink: LinkType | undefined;

  if (to.includes('#')) {
    const location = useLocation();
    const currentUrl = location.pathname + location.hash;

    className = `${className ?? ''} ${to === currentUrl ? "active" : ''}`.trim();
    CustomLink = Link;
  } else {
    CustomLink = NavLink;
  }

  return (
    <li>
      <ClickEventListener trackMouseDown trackTouch>
        <CustomLink
          to={to}
          className={className}
          onDragStart={preventAnchorDrag}
          {...restProps}
        >
          {label}
          {children}
        </CustomLink>
        <div className={styles.underline} />
        <div className={styles.underline2} />
      </ClickEventListener>
    </li>
  );
}

export default CustomNavLink;