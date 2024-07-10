import MouseEventListener from '../ClickEventListener'
import styles from './CustomNavLink.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

type LinkType = typeof NavLink | typeof Link;

interface PropTypes {
  to: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}

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
      <MouseEventListener trackMouseDown trackTouch>
        <CustomLink
          to={to}
          className={className}
          onDragStart={(e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault()}
          {...restProps}
        >
          {label}
          {children}
        </CustomLink>
        <div className={styles["hover-line"]} />
      </MouseEventListener>
    </li>
  )
}

export default CustomNavLink