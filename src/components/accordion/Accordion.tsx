import styles from './Accordion.module.css';
import globalStyles from '../../global.module.css';
import { useCallback } from 'react';
import useBoolean from '../../hooks/useBoolean';
import { Icon, IconType } from '../icons/Icon';
import { joinClassNames } from '../../utils';

type AccordionData = {
  title: string | React.ReactNode;
  image?: string;
  imageLink?: string;
  imageAlt?: string;
};

const getHeaderClassNames = (hasImage: boolean, hasFooter: boolean): string => {
	return joinClassNames(
    styles.header,
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
  footerContent?: React.ReactNode;
  children?: React.ReactNode;
}

const Accordion = ({ className, data, toggleCallback, footerContent, children }: Props) => {
  const { value: isOpen, toggle } = useBoolean(false);

  const handleToggle = useCallback(() => {
    toggle();
    toggleCallback?.();
  }, [toggle, toggleCallback]);

  return (
    <div className={joinClassNames(className, isOpen ? styles.open : '', data.image ? styles.roundedImage : '')}>
      <div className={styles.panel} onClick={handleToggle}>
        {data.image && (
          <div className={joinClassNames(styles.imageBorder, data.image ? styles.rounded : '')}>
            <a className={styles.imageBackground} href={data.imageLink} target="_blank">
              <img className={globalStyles.noSelect} src={data.image} alt={data.imageAlt} />
            </a>
          </div>
        )}
        <div className={getHeaderClassNames(data.image !== undefined, footerContent !== undefined)}>
          <h3>{data.title}</h3>
          <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={joinClassNames(styles.drawer, !footerContent ? styles.rounded : '')}>
          <div>
            {children}
          </div>
        </div>
        {footerContent && (
          <div className={styles.footer}>
            <div className={styles.underline} />
            {footerContent}
          </div>
        ) || (
          <div className={styles.underline} />
        )}
      </div>
    </div>
  );
};

export { Accordion, type AccordionData };