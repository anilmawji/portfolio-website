import portfolio_img from '../assets/projects/personal-site.png';
import it_portal_img from '../assets/projects/it-portal.png';
import traceroute_img from '../assets/projects/traceroute-sim.jpg';
import proxy_img from '../assets/projects/http-proxy.png';
import mario_img from '../assets/projects/mario-kart.png';
import mystics_img from '../assets/projects/mystics.png';
import { ToolInfoMap as Tool } from './ToolInfo';
import { CardData } from 'components/card/Card';

export const ProjectData: CardData[] = [
  {
    title: "PowerShell Script Profiler",
    image: it_portal_img,
    date: "July 20th, 2023",
    body: "Microsoft-focused desktop application for IT Administrators. Dynamically generates modern UI to import, schedule and monitor the execution of PowerShell script blocks.",
    link: "https://github.com/anilmawji/PowerShell-Script-Runner",
    tags: [Tool.C_SHARP, Tool.DOT_NET, Tool.BLAZOR, Tool.HTML, Tool.CSS, Tool.ASP_DOT_NET_CORE, Tool.AZURE, Tool.POWERSHELL, Tool.FIGMA]
  },
  {
    title: "Personal Website",
    image: portfolio_img,
    date: "June 30th, 2024",
    body: "Utilizes a fully custom component library. It's currently being used to showcase my projects, but will eventually be extended to include a tech blog as well!",
    link: "https://github.com/anilmawji/portfolio-site",
    tags: [Tool.REACT, Tool.TYPESCRIPT, Tool.JAVASCRIPT, Tool.HTML, Tool.CSS, Tool.FIGMA]
  },
  {
    title: "HTTP Web Filter",
    image: proxy_img,
    date: "January 6th, 2022",
    body: "Proxy server that intercepts web traffic, blocking web pages that contain select keywords. Inspects HTTP responses received by connected clients, filtering out information as needed. Designed for Linux systems.",
    link: "https://github.com/anilmawji/http-proxy",
    tags: [Tool.C, Tool.BASH]
  },
  {
    title: "Traceroute Simulator",
    image: traceroute_img,
    date: "January 15th, 2021",
    body: "CLI tool for finding the shortest path between two nodes based on relative distances. Uses Dijkstra’s shortest path algorithm.",
    link: "https://github.com/anilmawji/traceroute-sim",
    tags: [Tool.CPP]
  },
  {
    title: "Mario Kart for Raspberry Pi 4",
    image: mario_img,
    date: "March 14th, 2022",
    body: "Frogger from scratch, except with Super Mario characters! Includes custom SNES controller firmware for interfacing with GPIO. It was my term project for a computing machinery class at UCalgary.",
    link: "https://github.com/anilmawji/mario-kart",
    tags: [Tool.C, Tool.WIRING_PI]
  },
  {
    title: "Mystics",
    image: mystics_img,
    date: "August 19th, 2019",
    body: "A 2D medieval-style RPG I made in my senior year of high school, designed to push the limits of JavaFX. Includes a full sprite animation system, A* pathfinding enemies, tilemaps and an entity component system (ECS).",
    link: "https://github.com/anilmawji/mystics",
    tags: [Tool.JAVA, Tool.JAVA_FX, Tool.SCENE_BUILDER]
  }
];