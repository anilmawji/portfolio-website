import styles from './Accordion.module.css';
import globalStyles from '../../global.module.css';
import useBoolean from '../../hooks/useBoolean';
import { Icon, IconType } from '../../components/icons/Icon';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
  title: string;
  image?: string;
  imageLink?: string;
  children?: React.ReactNode;
}

const Accordion = ({ className, title, image, imageLink, children }: Props) => {
  const { value: isOpen, toggle } = useBoolean(false);

  return (
    <div className={joinClassNames(className, styles.accordion, isOpen ? styles.open : '')}>
      <div className={styles.container}>
        {image && (
          <div className={styles.logoContainer}>
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
      <div className={joinClassNames(styles.drawer, image ? styles.drawerWithLogo : '')}>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;