import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import styles from './Accordion.module.css';
import globalStyles from '../global.module.css';
import useBoolean from '../hooks/useBoolean';
import { Icon, IconType } from './icons/Icon';
import { joinClassNames } from '../utils';

interface Props {
  className?: string;
  title: string | React.ReactNode;
  image?: string;
  imageLink?: string;
  children?: React.ReactNode;
}

const Accordion = forwardRef(({
  className,
  title,
  image,
  imageLink,
  children
}: Props, ref) => {
  const { value: isOpen, toggle } = useBoolean(false);

  useImperativeHandle(ref, () => ({
    isOpen,
    toggle,
  }));

  return (
    <div className={joinClassNames(className, styles.accordion, isOpen ? styles.open : '')}>
      <div className={styles.panel}>
        {image && (
          <div className={styles.logoBorder}>
            <a className={styles.logo} href={imageLink} target="_blank">
              <img className={globalStyles.noSelect} src={image} />
            </a>
          </div>
        )}
        <div className={joinClassNames(styles.header, !image ? styles.rounded : '')} onClick={toggle}>
          <div className={`${styles.title} ${globalStyles.noSelect}`}>
            {title}
          </div>
          <Icon className={styles.arrow} type={IconType.ARROW_HEAD} />
        </div>
      </div>
      <div className={image ? styles.withLogo : ''}>
        <div className={styles.underline} />
        <div className={styles.drawer}>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Accordion;