import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { JobData, JobAccordionData } from '../../data/JobData';
import AccordionContainer from '../accordion/AccordionContainer';
import { Icon, IconType } from '../../components/icons/Icon';
import ToolChipContainer from '../../components/text/ToolChipContainer';
import { AccordionData } from 'components/accordion/Accordion';

interface Props {
  className?: string;
}

const JobDataWithModifiedTitles = (): AccordionData[] => {
  return JobAccordionData.map((data, i) => ({
    ...data,
    title: (
      <div className={styles.jobTitle}>
        <p>{data.title} @ {JobData[i].organization}</p>
        <div className={styles.subtitle}>
          <p className={styles.date}>{JobData[i].startDate} - {JobData[i].endDate}</p>
          <p className={styles.location}>{JobData[i].location}</p>
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
          footerChildren={(_, i) => (
            <ToolChipContainer chipData={JobData[i].tools} />
          )}
        >
          {(_, i) => (
            <ul className={styles.bullets}>
              {JobData[i].bulletPoints.map((bullet, j) => (
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
