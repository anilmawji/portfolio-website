import portfolio_img from '../assets/projects/personal-site.png';
import it_portal_img from '../assets/projects/it-portal.png';
import traceroute_img from '../assets/projects/traceroute-sim.jpg';
import proxy_img from '../assets/projects/http-proxy.png';
import mario_img from '../assets/projects/mario-kart.png';
import mystics_img from '../assets/projects/mystics.png';

const ProjectData = [
  {
    title: "PowerShell Script Executor",
    image: it_portal_img,
    date: "July 20th, 2023",
    body: "Microsoft-focused desktop application for internal IT operations. Dynamically generates modern UI to interact with PowerShell script blocks. Import, track, schedule and execute scripts locally.",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: ["C#", ".NET MAUI", "Blazor", "MudBlazor", "HTML", "CSS"]
  },
  {
    title: "Personal Website",
    image: portfolio_img,
    date: "June 30th, 2024",
    body: "Dynamic, mobile-friendly site used to showcase my projects. The site uses a fully custom component library. It will eventually be extended to include a full tech blog!",
    link: "https://github.com/anilmawji/portfolio-site",
    tags: ["React", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Mario Kart for Raspberry Pi 4",
    image: mario_img,
    date: "March 14th, 2022",
    body: "Frogger from scratch, except with characters from Super Mario! Includes custom SNES controller firmware for interfacing with GPIO. Originally a term project made for CPSC 359: Computing Machinery II at UCalgary.",
    link: "https://github.com/anilmawji/mario-kart",
    tags: ["C", "WiringPi"]
  },
  {
    title: "HTTP Proxy Server",
    image: proxy_img,
    date: "January 6th, 2022",
    body: "Web proxy that blocks webpages containing select keywords. This server intercepts HTTP responses received by connected clients, and filters out information as needed. Made to work on Linux.",
    link: "https://github.com/anilmawji/http-proxy",
    tags: ["C"]
  },
  {
    title: "Mystics",
    image: mystics_img,
    date: "August 19th, 2019",
    body: "A 2D medieval-style RPG I made in my senior year of high school, designed to test the limits of JavaFX. Includes a full sprite animation system, A* pathfinding enemies, tilemaps, and an entity component system (ECS).",
    link: "https://github.com/anilmawji/mystics",
    tags: ["Java", "JavaFX"]
  },
  {
    title: "Traceroute Simulation",
    image: traceroute_img,
    date: "January 15th, 2021",
    body: "Program for finding the shortest path between two nodes, meant to imitate traceroute. Uses Dijkstra’s shortest path algorithm.",
    link: "https://github.com/anilmawji/py-chat-app",
    tags: ["C++"]
  }
];

export default ProjectData;