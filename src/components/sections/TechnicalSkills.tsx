import styles from './TechnicalSkills.module.css';
import globalStyles from '../../global.module.scss';
import { Skills } from '../../data/SkillData';
import { Icon } from '../icons/Icon';
import { Tooltip } from '../../components/text/Tooltip2';
import { joinClassNames, ReactCSSVariables } from '../../utils';

interface Props {
  className?: string;
}

const TechnicalSkillsSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.container, className)} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.skills}>
        {Skills.map((data, i) => {
          const iconStyle: ReactCSSVariables = {
            '--added-skill-icon-size': data.addedIconSize || '0px',
          };

          return (
            <Tooltip key={i} text={data.name} visibilityDelay={250} fitTextOnSingleLine>
              <div className={`${styles.skillBox} ${globalStyles.shadowBottom}`} style={iconStyle}>
                <Icon className={styles.icon} type={data.icon} />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}

export default TechnicalSkillsSection;