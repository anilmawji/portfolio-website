import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { JobData, JobHeaderData } from '../../data/JobData';
import AccordionContainer from '../accordion/AccordionContainer';
import { Icon, IconType } from '../../components/icons/Icon';
import ToolChipContainer from '../../components/text/ToolChipContainer';
import { AccordionData } from '../../components/accordion/Accordion';

const ModdedJobAccordionData = (): AccordionData[] => {
  return JobHeaderData.map((data, i) => {
    const { organization, startDate, endDate, location } = JobData[i];

    return {
      ...data,
      title: (
        <div className={styles.jobTitle}>
          <p>{data.title} @ {organization}</p>
          <div className={styles.subtitle}>
            <p className={styles.date}>{startDate} - {endDate}</p>
            <p className={styles.location}>{location}</p>
          </div>
        </div>
      )
    };
  });
};

interface Props {
  className?: string;
}

const ExperienceSection = ({ className }: Props) => {
  const accordionData = ModdedJobAccordionData();

  return (
    <section className={joinClassNames(globalStyles.sectionBlock, className)} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <AccordionContainer
        className={styles.jobs}
        accordionData={accordionData}
        accordionContent={(_, i) => (
          <ul className={styles.bullets}>
            {JobData[i].bulletPoints.map((bullet, j) => (
              <li key={j}>
                <Icon className={styles.bullet} type={IconType.DOUBLE_ARROW_HEAD} />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        accordionFooterContent={(_, i) => (
          <ToolChipContainer chipData={JobData[i].tools} />
        )}
      />
    </section>
  );
}

export default ExperienceSection;
