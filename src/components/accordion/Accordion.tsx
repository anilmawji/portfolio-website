import styles from './Accordion.module.css';
import globalStyles from '../../global.module.css';
import { useCallback } from 'react';
import useBoolean from '../../hooks/useBoolean';
import { Icon, IconType } from '../icons/Icon';
import { joinClassNames } from '../../utils';

type AccordionData = {
  title: string | React.ReactNode;
  image: string;
  imageLink: string;
};

const getHeaderClassNames = (hasImage: boolean, hasFooter: boolean): string => {
	return joinClassNames(styles.header,
    !hasImage && !hasFooter ? styles.rounded :
    !hasFooter ? styles.roundedRight :
    !hasImage ? styles.roundedTop :
    styles.roundedTopRight
  );
}

interface Props {
  className?: string;
  data: AccordionData;
  toggleCallback?: () => void;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
}

const Accordion = ({ className, data, toggleCallback, children, footerChildren }: Props) => {
  const { value: isOpen, toggle } = useBoolean(false);

  const handleToggle = useCallback(() => {
    toggle();
    toggleCallback?.();
  }, [toggle, toggleCallback]);

  return (
    <div className={joinClassNames(className, isOpen ? styles.open : '', data.image ? styles.roundedImage : '')}>
      <div className={styles.panel}>
        {data.image && (
          <div className={joinClassNames(styles.logoBorder, data.image ? styles.rounded : '')}>
            <a className={styles.logo} href={data.imageLink} target="_blank">
              <img className={globalStyles.noSelect} src={data.image} />
            </a>
          </div>
        )}
        <div className={getHeaderClassNames(data.image !== undefined, footerChildren !== undefined)} onClick={handleToggle}>
          <div className={`${styles.title} ${globalStyles.noSelect}`}>
            {data.title}
          </div>
          <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
        </div>
      </div>
      <div className={styles.bottom}>
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
        ) || (
          <div className={styles.underline} />
        )}
      </div>
    </div>
  );
};

export { Accordion, type AccordionData };