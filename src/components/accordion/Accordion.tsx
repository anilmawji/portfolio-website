import styles from './Accordion.module.css';
import { useCallback } from 'react';
import useBoolean from '../../hooks/useBoolean';
import { Icon, IconType } from '../icons/Icon';
import { HeaderPanel, HeaderPanelData } from '../HeaderPanel';
import { joinClassNames } from '../../utils';

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
  data: HeaderPanelData;
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
      <HeaderPanel
        className={getHeaderClassNames(data.image !== undefined, footerContent !== undefined)}
        data={data}
        children={
          <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
        }
        onClick={handleToggle}
      />
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

export { Accordion };