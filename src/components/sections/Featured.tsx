import styles from './Featured.module.css'
import Card from '../card/Card'
import CardContainer from '../card/CardContainer'
import arch_desktop from '../../assets/arch_desktop.png'

const FeaturedSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Featured Posts
      </div>
      <CardContainer>
        <Card
          image={arch_desktop}
          title="How to Reset the Root Password on Kali Linux"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          tags={["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML"]}
          link={"https://github.com/anilmawji/PowerShell-Script-Runner"}
        />
        <Card
          image={arch_desktop}
          title="Hack The Box: Anubis Writeup"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaaaa. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          tags={["C"]}
          link={"https://github.com/anilmawji/mario-kart"}
        />
        <Card
          image={arch_desktop}
          title="Portfolio Website"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          tags={["React.js", "TypeScript", "HTML", "CSS"]}
          link={"https://github.com/anilmawji/portfolio-site"}
        />
        <Card
          image={arch_desktop}
          title="Portfolio Website"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          tags={["React.js", "TypeScript", "HTML", "CSS"]}
          link={"https://github.com/anilmawji/portfolio-site"}
        />
        <Card
          image={arch_desktop}
          title="Portfolio Website"
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          tags={["React.js", "TypeScript", "HTML", "CSS"]}
          link={"https://github.com/anilmawji/portfolio-site"}
        />
      </CardContainer>
    </div>
  )
}

export default FeaturedSection