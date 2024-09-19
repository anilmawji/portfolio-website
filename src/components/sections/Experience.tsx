import styles from './Experience.module.css';
import Accordion from '../Accordion';
import { joinClassNames } from '../../utils';
import { JobData } from '../../data/JobData';

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
  return (
    <section className={joinClassNames(styles.experience, className)} id="experience">
      <h2>Experience</h2>
      <div className={styles.jobs}>
        {JobData.map((data, i) => {
          return (
            <>
              <div className={styles.border} />
              <Accordion
                key={i}
                className={styles.accordion}
                title={
                  <JobTitle
                    title={data.title}
                    organization={data.organization}
                    date={`${data.startDate} - ${data.endDate}`}
                  />
                }
                image={data.logo}
                imageLink={data.link}
              >
                <p className={styles.bullets}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati, qui. Obcaecati recusandae omnis nostrum dolorum?
                  Facilis ab aut unde deleniti, reprehenderit voluptates numquam dolorem atque, exercitationem iste odit molestias aperiam.
                </p>
              </Accordion>
              <div className={styles.border} />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;