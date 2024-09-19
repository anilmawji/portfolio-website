import styles from './Experience.module.css';
import globalStyles from '../../global.module.css';
import Accordion from '../../components/buttons/Accordion';
import { joinClassNames } from '../../utils';
import { JobData } from '../../data/JobData';

interface JobTitleProps {
  title: string;
  organization: string;
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
            <div className={styles.job}>
              <Accordion
                key={i}
                className={styles.accordion}
                title={`${data.title} @ ${data.organization}`}
                image={data.logo}
                imageLink={data.link}
              >
                <p className={styles.bullets}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati, qui. Obcaecati recusandae omnis nostrum dolorum?
                  Facilis ab aut unde deleniti, reprehenderit voluptates numquam dolorem atque, exercitationem iste odit molestias aperiam.
                </p>
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;