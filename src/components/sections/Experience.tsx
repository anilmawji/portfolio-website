import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import { joinClassNames } from '../../utils';
import { Experience, ExperienceHeaders } from '../../data/ExperienceData';
import AccordionContainer from '../accordion/AccordionContainer';
import { Icon, IconType } from '../../components/icons/Icon';
import ToolChipContainer from '../../components/text/ToolChipContainer';
import { AccordionData } from '../../components/accordion/Accordion';

const ModdedExperienceData = (): AccordionData[] => {
  return ExperienceHeaders.map((data, i) => {
    const { organization, startDate, endDate, location } = Experience[i];

    return {
      ...data,
      title: (
        <div className={styles.header}>
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
  const accordionData = ModdedExperienceData();

  return (
    <section className={joinClassNames(globalStyles.sectionBlock, className)} id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>
      <AccordionContainer
        className={styles.jobs}
        accordionData={accordionData}
        accordionContent={(_, i) => (
          <ul className={styles.bullets}>
            {Experience[i].bulletPoints.map((bullet, j) => (
              <li key={j}>
                <Icon className={styles.bullet} type={IconType.DOUBLE_ARROW_HEAD} />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        accordionFooterContent={(_, i) => (
          <ToolChipContainer chipData={Experience[i].tools} />
        )}
      />
    </section>
  );
}

export default ExperienceSection;
