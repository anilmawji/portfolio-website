import styles from './Card.module.css';
import globalStyles from '../../global.module.scss';
import { calculateReadingTime } from '../../utils';
import { ToolInfo } from '../../data/ToolInfo';
import { Icon, IconType } from '../../components/icons/Icon';
import ToolChipContainer from '../../components/text/ToolChipContainer';
import { useMemo } from 'react';

type CardData = {
  title: string;
  image: string;
  imageAlt?: string;
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
  const readingTime = useMemo(() => {
    return includeReadTime ? (
      <span> &#8226; {calculateReadingTime(data.body)} read</span>
    ) : undefined;
  }, [data.body, includeReadTime]);

  const toolChips = useMemo(() => (
    <ToolChipContainer className={styles.chips} chipData={data.tags} />
  ), [data.tags]);

  return (
    <a className={`${styles.card} ${globalStyles.shadowBottom}`} href={data.link} target="_blank">
      <img src={data.image} alt={data.imageAlt} />
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            {data.title}
            <Icon className={styles.arrow} type={IconType.ARROW_UP_RIGHT} />
          </h3>
          <p className={styles.date}>
            {data.date}{readingTime}
          </p>
          <p className={`${styles.body} ${styles.multilineTruncate}`}>
            {data.body}
          </p>
        </div>
        {toolChips}
      </div>
    </a>
  );
}

export { Card, type CardData };