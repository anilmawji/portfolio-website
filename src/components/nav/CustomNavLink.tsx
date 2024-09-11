import styles from './CustomNavLink.module.css';
import ClickEventListener from '../ClickEventListener';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { joinClassNames } from '../../utils';

interface PropTypes extends LinkProps {
  to: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const preventAnchorDrag = (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault();

const CustomNavLink = ({ to, label, className, children, onClick, ...restProps }: PropTypes) => {
  const location = useLocation();
  const currentUrl = location.pathname + location.hash;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!to.includes("#")) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <ClickEventListener trackMouseDown trackTouch>
      <Link
        to={to}
        className={joinClassNames(className, to === currentUrl ? "active" : "")}
        onDragStart={preventAnchorDrag}
        onClick={handleClick}
        {...restProps}
      >
        {label}
        {children}
      </Link>
      <div className={styles.underline} />
    </ClickEventListener>
  );
}

export default CustomNavLink;