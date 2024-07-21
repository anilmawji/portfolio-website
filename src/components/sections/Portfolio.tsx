import styles from './Portfolio.module.css'
import Card from '../card/Card'
import it_portal from '../../assets/projects/it-portal.png'
import mario_kart from '../../assets/projects/mario-kart.png'
import portfolio_site from '../../assets/projects/portfolio-site.png'
import traceroute_sim from '../../assets/projects/traceroute-sim.jpg'
import CardContainer from '../card/CardContainer'

const PortfolioSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Projects
      </div>
      <CardContainer>
        <Card
          image={it_portal}
          title="PowerShell Script Executor"
          description={"Microsoft-focused desktop application for internal IT operations."}
          tags={["C#", ".NET MAUI", "Blazor", "HTML", "CSS", "XAML"]}
          link={"https://github.com/anilmawji/PowerShell-Script-Runner"}
        />
        <Card
          image={mario_kart}
          title="Mario Kart for Raspberry Pi"
          description={"Mario Kart for the Raspberry Pi. Includes custom SNES controller firmware for interfacing with GPIO."}
          tags={["C"]}
          link={"https://github.com/anilmawji/mario-kart"}
        />
        <Card
          image={portfolio_site}
          title="Portfolio Website"
          description={"Personal portfolio site roughly designed in Figma."}
          tags={["React.js", "TypeScript", "HTML", "CSS"]}
          link={"https://github.com/anilmawji/portfolio-site"}
        />
        <Card
          image={traceroute_sim}
          title="HTTP Proxy"
          description={"Web filter that blocks webpages containing select keywords by inspecting incoming traffic."}
          tags={["C"]}
          link={"https://github.com/anilmawji/http-proxy"}
        />
        <Card
          image={traceroute_sim}
          title="Traceroute Simulation"
          description={"Program for finding the shortest path between two nodes using Dijkstra's algorithm."}
          tags={["C++"]}
          link={"https://github.com/anilmawji/traceroute-sim"}
        />
        <Card
          image={mario_kart}
          title="Mystics"
          description={"A final project I made in my senior-year of high school; a 2D RPG game with sprite animations, tile maps and A* pathfinding."}
          tags={["Java", "JavaFX"]}
          link={"https://github.com/anilmawji/mystics"}
        />
      </CardContainer>
    </div>
  )
}

export default PortfolioSection