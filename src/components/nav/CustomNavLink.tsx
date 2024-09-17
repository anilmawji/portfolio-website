import styles from './CustomNavLink.module.css';
import ClickEventListener from '../ClickEventListener';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { joinClassNames, urlsOnSamePage, isExternalUrl } from '../../utils';

interface Props extends LinkProps {
  className?: string;
  to: string;
  label: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomNavLink = ({ className, to, label, children, onClick, ...restProps }: Props) => {
  const location = useLocation();
  const currentUrl = location.pathname + location.hash;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If destination is not on the same page (but still on this website), skip to the top of the page
    // Otherwise, do nothing (ScrollToAnchor kicks in)
    if (!urlsOnSamePage(currentUrl, to) && !isExternalUrl(to)) {
      window.scrollTo(0, 0);
    }
    onClick?.(e);
  }

  return (
    <ClickEventListener trackMouseDown trackTouch>
      <Link
        to={to}
        className={joinClassNames(className, to === currentUrl ? 'active' : '')}
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