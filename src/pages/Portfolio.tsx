import styles from './Portfolio.module.css'
import CardContainer from '../components/CardContainer'
import arch_desk from '../assets/arch_desktop.png'
import portfolio_img from '../assets/projects/personal-site.png'
import it_portal_img from '../assets/projects/it-portal.png'
import traceroute_img from '../assets/projects/traceroute-sim.jpg'
import proxy_img from '../assets/projects/http-proxy.png'
import mario_img from '../assets/projects/mario-kart.png'
import Footer from '../components/sections/Footer'
import CircuitLine from '../components/CircuitLine'

const projectData = [
  {
    title: "PowerShell Script Executor",
    image: it_portal_img,
    date: "Jan 15th 2024",
    body: "Microsoft-focused desktop application for internal IT operations. Dynamically generates modern UI to interact with PowerShell script blocks. Import, track, schedule and execute scripts locally.",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "HTML", "CSS"]
  },
  {
    title: "Personal Website",
    image: portfolio_img,
    date: "October 15th 2024",
    body: "Dynamic, mobile-friendly site used to showcase my projects, but will eventually be extended to include a full tech blog! Work in progress.",
    link: "https://github.com/anilmawji/portfolio-site",
    tags: ["React", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Mario Kart for Raspberry Pi",
    image: mario_img,
    date: "Jan 15th 2024",
    body: "Frogger from scratch, except with characters from Super Mario! Includes custom SNES controller firmware for interfacing with GPIO. It was originally a term project made for CPSC 359 at the University of Calgary.",
    link: "https://github.com/anilmawji/mario-kart",
    tags: ["C", "WiringPi"]
  },
  {
    title: "HTTP Proxy Server",
    image: proxy_img,
    date: "October 15th 2024",
    body: "Web proxy that blocks webpages containing select keywords. This server intercepts HTTP responses received by connected clients, and filters out information as needed. Made to work on Linux.",
    link: "https://github.com/anilmawji/http-proxy",
    tags: ["C"]
  },
  {
    title: "Traceroute Simulation",
    image: traceroute_img,
    date: "Jan 15th 2024",
    body: "Program for finding the shortest path between two nodes, meant to imitate traceroute. Uses Dijkstra’s shortest path algorithm.",
    link: "https://github.com/anilmawji/py-chat-app",
    tags: ["C++"]
  },
  {
    title: "Mystics",
    image: arch_desk,
    date: "Jan 15th 2024",
    body: "A 2D RPG game I made in my senior year of high school, designed to test the limits of JavaFX. Includes a full sprite animation system, A* pathfinding enemies, tilemaps, and an entity component system (ECS).",
    link: "https://github.com/anilmawji/mystics",
    tags: ["Java", "JavaFX"]
  }
]

const Portfolio = () => {
  return (
    <div className="page">
      <div className={styles.header}>
        <div className={styles.title}>
          Portfolio
        </div>
      </div>
      <div className={styles.container}>
        <CircuitLine className={styles.circuit}/>
        <div className={styles.projects}>
          <CardContainer cardData={projectData} includeReadingTime={false}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio