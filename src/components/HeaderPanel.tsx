import styles from './HeaderPanel.module.css';
import globalStyles from '../global.module.css';
import { joinClassNames } from '../utils';

type HeaderPanelData = {
  title: string | React.ReactNode;
  image?: string;
  imageLink?: string;
};

interface Props {
  className?: string;
  data: HeaderPanelData;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

const HeaderPanel = ({ className, data, onClick, children }: Props) => {
  return (
    <div className={joinClassNames(data.image ? styles.roundedImage : '')}>
      <div className={styles.panel}>
        {data.image && (
          <div className={joinClassNames(styles.logoBorder, data.image ? styles.rounded : '')}>
            <a className={styles.logo} href={data.imageLink} target="_blank">
              <img className={globalStyles.noSelect} src={data.image} />
            </a>
          </div>
        )}
        <div className={joinClassNames(
            styles.header,
            onClick ? styles.pointer : '',
            className
          )}
          onClick={onClick}
        >
          <div className={styles.title}>
            {data.title}
          </div>
          {children}
        </div>
      </div> 
    </div>
  );
}

export { HeaderPanel, type HeaderPanelData };