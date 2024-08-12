import styles from './Featured.module.css'
import CardContainer from '../CardContainer'
import arch_desk from '../../assets/arch_desktop.png'

const postData = [
  {
    title: "Hack The Box: Anubis Writeup",
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
    title: "Hack The Box: Anubis Writeup",
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
    title: "Hack The Box: Anubis Writeup",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["React.js", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Hack The Box: Anubis Writeup",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML", "C#"]
  }
]

const FeaturedSection = ({ ...restStyles }) => {
  return (
    <div className={styles.container} {...restStyles}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer cardData={postData} />
    </div>
  )
}

export default FeaturedSection