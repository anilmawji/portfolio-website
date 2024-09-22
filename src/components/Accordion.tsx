import styles from './Accordion.module.css';
import globalStyles from '../global.module.css';
import useBoolean from '../hooks/useBoolean';
import { Icon, IconType } from './icons/Icon';
import { joinClassNames } from '../utils';
import { useCallback } from 'react';

const getHeaderClassNames = (hasImage: boolean, hasFooter: boolean): string => {
	return joinClassNames(styles.header
  );
}

interface Props {
  className?: string;
  title: string | React.ReactNode;
  image?: string;
  imageLink?: string;
  toggleCallback?: () => void;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
}

const Accordion = ({ className, title, image, imageLink, toggleCallback, children, footerChildren }: Props) => {
  const { value: isOpen, toggle } = useBoolean(false);

  const handleToggle = useCallback(() => {
    toggle();
    toggleCallback?.();
  }, [toggle, toggleCallback]);

  return (
    <div className={joinClassNames(className, styles.accordion, isOpen ? styles.open : '')}>
      <div className={styles.panel}>
        {image && (
          <div className={joinClassNames(styles.logoBorder, image ? styles.rounded : '')}>
            <a className={styles.logo} href={imageLink} target="_blank">
              <img className={globalStyles.noSelect} src={image} />
            </a>
          </div>
        )}
        <div className={getHeaderClassNames(image !== null, footerChildren !== null)} onClick={handleToggle}>
          <div className={`${styles.title} ${globalStyles.noSelect}`}>
            {title}
          </div>
          <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
        </div>
      </div>
      <div className={image ? styles.withLogo : ''}>
        <div className={joinClassNames(styles.drawer, !footerChildren ? styles.rounded : '')}>
          <div>
            {children}
          </div>
        </div>
        {footerChildren && (
          <div className={styles.footer}>
            <div className={styles.underline} />
            {footerChildren}
          </div>
        )}
      </div>
    </div>
  );
};

export { Accordion };