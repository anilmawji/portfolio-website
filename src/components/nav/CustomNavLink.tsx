import MouseEventListener from '../ClickEventListener'
import styles from './CustomNavLink.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

interface PropTypes {
  to: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}

const CustomNavLink = ({ to, label, className, children, ...restProps }: PropTypes) => {
  let LinkType = null;

  if (to.includes('#')) {
    const location = useLocation();
    const currentUrl = location.pathname + location.hash;

    className = `${className || ''} ${to === currentUrl ? "active" : ''}`.trim();
    LinkType = Link;
  } else {
    LinkType = NavLink;
  }

  return (
    <li>
      <MouseEventListener trackMouseDown trackTouch>
        <LinkType
          to={to}
          className={className}
          onDragStart={e => e.preventDefault()}
          {...restProps}
        >
          {label}
          {children}
        </LinkType>
        <div className={styles["hover-line"]} />
      </MouseEventListener>
    </li>
  )
}

export default CustomNavLink