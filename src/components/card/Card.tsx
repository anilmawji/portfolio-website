import styles from './Card.module.css';
import globalStyles from '../../global.module.css';
import { readingTime } from '../../utils';
import { ToolInfo } from '../../data/ToolInfo';
import { Icon, IconType } from '../../components/icons/Icon';
import ToolChipContainer from '../../components/text/ToolChipContainer';

type CardData = {
  title: string;
  image: string;
  date: string;
  time?: string;
  body: string;
  link: string;
  tags: (ToolInfo | string)[];
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: CardData;
  includeReadTime?: boolean;
}

const Card = ({ data, includeReadTime }: Props) => {
  if (includeReadTime) {
    data.time = readingTime(data.body);
  }

  return (
    <a className={`${styles.card} ${globalStyles.shadowBottom}`} href={data.link} target="_blank">
      <img src={data.image} />
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            {data.title}
            <Icon className={styles.arrow} type={IconType.ARROW_UP_RIGHT} />
          </h3>
          <p className={styles.date}>
            {data.date} {data.time && (
              <span>&#8226; {data.time} read</span>
            )}
          </p>
          <p className={`${styles.body} ${styles.multilineTruncate}`}>
            {data.body}
          </p>
        </div>
        <ToolChipContainer className={styles.chips} chipData={data.tags}/>
      </div>
    </a>
  );
}

export { Card, type CardData };