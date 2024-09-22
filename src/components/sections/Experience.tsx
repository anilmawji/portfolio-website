import styles from './Experience.module.css';
import { Accordion } from '../Accordion';
import { joinClassNames } from '../../utils';
import { JobData } from '../../data/JobData';
import { useState, useCallback } from 'react';
import { Icon, IconType } from '../../components/icons/Icon';
import Chip from '../../components/text/Chip';
import { isToolInfo } from '../../data/ToolInfo';

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  const [openAccordions, setOpenAccordions] = useState<boolean[]>(Array(JobData.length).fill(false));

  const toggleAccordion = useCallback((index: number) => {
    setOpenAccordions(prev => {
      const newOpened = [...prev];
      newOpened[index] = !newOpened[index];
      return newOpened;
    });
  }, []);

  return (
    <section className={joinClassNames(styles.experience, className)} id="experience">
      <h2>Experience</h2>
      <div className={styles.jobs}>
        {JobData.map((data, i) => {
          return (
            <div key={i}>
              {i !== 0 && (
                <div
                  className={`${styles.spacer}${openAccordions[i] || openAccordions[i - 1] ? ` ${styles.spacerExpanded}` : ''}`}
                />
              )}
              <Accordion
                className={styles.accordion}
                title={
                  <div className={styles.jobTitle}>
                    <p>{data.title} @ {data.organization}</p>
                    <p className={styles.date}>{data.startDate} - {data.endDate}</p>
                    <p className={styles.location}>{data.location}</p>
                  </div>
                }
                image={data.logo}
                imageLink={data.link}
                toggleCallback={() => toggleAccordion(i)}
                footerChildren={
                  <div className={styles.chips}>
                    {data.tags.map((tag, j) => {
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
                }
              >
                <ul className={styles.bullets}>
                  {data.bulletPoints.map((bullet, j) => (
                    <li key={j}>
                      <Icon className={styles.bullet} type={IconType.DOUBLE_ARROW_HEAD}/>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;
