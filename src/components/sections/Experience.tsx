import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { JobData } from '../../data/JobData';
import AccordionContainer from '../accordion/AccordionContainer';
import { JobInfo } from '../../data/JobData';
import { Icon, IconType } from '../../components/icons/Icon';
import { isToolInfo } from '../../data/ToolInfo';
import Chip from '../../components/text/Chip';

// TODO: Split JobData from AccordionData for the jobs and make them separate const arrays so that you can grab

interface Props {
  className?: string;
}

const JobDataWithModifiedTitles = (): JobInfo[] => {
  return JobData.map(data => ({
    ...data,
    title: (
      <div className={styles.jobTitle}>
        <p>{data.title} @ {data.organization}</p>
        <div className={styles.subtitle}>
          <p className={styles.date}>{data.startDate} - {data.endDate}</p>
          <p className={styles.location}>{data.location}</p>
        </div>
      </div>
    )
  }));
};

const ExperienceSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(globalStyles.sectionBlock, className)} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.jobs}>
        <AccordionContainer
          accordionData={JobDataWithModifiedTitles()}
          footerChildren={(data) => (
            <div className={globalStyles.chipContainer}>
              {data.tags?.map((tag, j) => {
                const isTagATool = isToolInfo(tag);
                  return (
                    <Chip
                      key={j}
                      label={isTagATool ? tag.name : tag}
                      color={isTagATool ? tag.color : undefined}
                    />
                  );
              })}
            </div>
          )}
        >
          {(data) => (
            <ul className={styles.bullets}>
              {data.bulletPoints?.map((bullet, j) => (
                <li key={j}>
                  <Icon className={styles.bullet} type={IconType.DOUBLE_ARROW_HEAD} />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </AccordionContainer>
      </div>
    </section>
  );
}

export default ExperienceSection;
