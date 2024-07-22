import SvgAPlus from "../icons/SvgAPlus"
import SvgSecurityPlus from "../icons/SvgSecurityPlus"
import styles from './Timeline.module.css'

const Timeline = () => {
  // Vertical timeline displaying my tech journey across different categories (education, certifications, experience, projects)
  // Start with University, end with government job
  // Dropdown list to filter by a specific category

  // Below timeline is a section named "battlestation" including little animated visualizations done with css of my hardware
  // PC, monitor, phone, laptop
  return (
    <div className={styles.container}>
      Timeline
      Certifications
      CompTIA A+, CompTIA Security+, Microsoft Certified: Azure Fundamentals, Databricks Fundamentals, Practical Junior Penetration Tester (PJPT)
      <SvgAPlus />
      <SvgSecurityPlus />
      Experience
      Education
    </div>
  )
}

export default Timeline