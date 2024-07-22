import styles from './CardContainer.module.css'
import arch_desk from '../../assets/arch_desktop.png'
import Tag from './Tag'
import { useState } from 'react'

const CardContainer = () => {
  const [cards] = useState([
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML"]
    },
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["C"]
    },
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["React.js", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["React.js", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["React.js", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "How to Reset the Root Password in Kali Linux",
      image: arch_desk,
      date: "Jan 15th 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit a ipsa fugit, porro adipisci at enim similique vitae doloribus maiores repudiandae nostrum maxime in recusandae unde fuga illum esse!",
      link: "https://github.com/anilmawji/PowerShell-Script-Runner",
      tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML"]
    }
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {cards.map((card, i) => {
          return (
            <a key={i} className={styles.card} href={card.link} target="_blank">
              <img src={card.image} />
              <div className={styles.text}>
                <h3 className={styles.title}>
                  {card.title}
                </h3>
                <p className={styles.date}>
                  {card.date}
                </p>
                <p className={styles.description}>
                  {card.description}
                </p>
                <div className={styles.tags}>
                  {card.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                  ))}
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default CardContainer