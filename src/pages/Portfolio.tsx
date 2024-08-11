import styles from './Portfolio.module.css'
import CardContainer from '../components/CardContainer'
import arch_desk from '../assets/arch_desktop.png'
import Footer from '../components/sections/Footer'
import CircuitLine from '../components/CircuitLine'

const projectData = [
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML"]
  },
  {
    title: "Hack The Box: Anubis Writeup",
    image: arch_desk,
    date: "October 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#", "C#", "HTML", "Blazor", "CSS", "XAML", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", ".NET MAUI"]
  },
  {
    title: "Hack The Box: Anubis Writeup",
    image: arch_desk,
    date: "October 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["React.js", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#"]
  },
  {
    title: "How to Reset the Root Password in Kali Linux",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#"]
  }
]

const Portfolio = () => {
  return (
    // <div className={styles.bottom}>
    //   <CircuitLine className={styles.circuit}/>
    //   <div className={styles.projects}>
    //     <CardContainer cardData={projectData} />
    //   </div>
    // </div>
    <div className="page">
      <div className={styles.container}>
        <div className={styles.title}>
          Featured Posts
        </div>
        <CircuitLine className={styles.circuit}/>
        <div className={styles.projects}>
          <CardContainer cardData={projectData} />
        </div>
        {/* <a className={styles.blog_link}>
          View Full Blog
        </a> */}
      </div>
    </div>
    // <div className="page">
    //   <div className={styles.header}>
    //     <div className={styles.title}>
    //       Portfolio
    //     </div>
    //   </div>
    //   <div className={styles.bottom}>
    //     <CircuitLine className={styles.circuit}/>
    //     <div className={styles.projects}>
    //       <CardContainer cardData={projectData} />
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  )
}

export default Portfolio