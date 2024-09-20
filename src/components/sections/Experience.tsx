import styles from './Experience.module.css';
import { Accordion } from '../Accordion';
import { joinClassNames } from '../../utils';
import { JobData } from '../../data/JobData';
import { useState } from 'react';

interface JobTitleProps {
  title: string;
  organization: string;
  date: string;
}

const JobTitle = ({ title, organization, date }: JobTitleProps) => {
  return (
    <div className={styles.jobTitle}>
      <p>{title} @ {organization}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  const [openedAccordions, setOpenedAccordions] = useState<boolean[]>(Array(JobData.length).fill(false));

  const toggleAccordion = (index: number) => {
    setOpenedAccordions(prev => {
      const newOpened = [...prev];
      newOpened[index] = !newOpened[index];
      return newOpened;
    });
  };

  return (
    <section className={joinClassNames(styles.experience, className)} id="experience">
      <h2>Experience</h2>
      <div className={styles.jobs}>
        {JobData.map((data, i) => {
          return (
            <>
              {i !== 0 &&
                <div className={joinClassNames(
                  styles.spacer,
                  openedAccordions[i] || openedAccordions[i-1] ? styles.spacerExpanded : ''
                )} />
              }
              <Accordion
                key={data.key}
                title={
                  <JobTitle
                    title={data.title}
                    organization={data.organization}
                    date={`${data.startDate} - ${data.endDate}`}
                  />
                }
                image={data.logo}
                imageLink={data.link}
                toggleCallback={() => toggleAccordion(i)}
              >
                <p className={styles.bullets}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati, qui. Obcaecati recusandae omnis nostrum dolorum?
                  Facilis ab aut unde deleniti, reprehenderit voluptates numquam dolorem atque, exercitationem iste odit molestias aperiam.
                </p>
              </Accordion>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;
