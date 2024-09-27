import { IconType } from '../components/icons/Icon';

export type SkillData = {
  name: string;
  icon: IconType;
};

export const Skills: SkillData[] = [
  {
    name: "React",
    icon: IconType.REACT
  },
  {
    name: "TypeScript",
    icon: IconType.TYPESCRIPT
  },
  {
    name: "JavaScript",
    icon: IconType.JAVASCRIPT
  },
  {
    name: "HTML5",
    icon: IconType.HTML
  },
  {
    name: "CSS",
    icon: IconType.CSS
  },
  {
    name: "Sass",
    icon: IconType.SASS
  },
  {
    name: "C#",
    icon: IconType.C_SHARP
  },
  {
    name: ".NET Core",
    icon: IconType.DOT_NET_CORE
  },
  {
    name: "Blazor",
    icon: IconType.BLAZOR
  },
  {
    name: "MySQL",
    icon: IconType.MY_SQL
  },
  {
    name: "Git",
    icon: IconType.GIT
  },
  {
    name: "Node.js",
    icon: IconType.NODE_JS
  },
  {
    name: "Microsoft Azure",
    icon: IconType.AZURE
  },
  {
    name: "Kubernetes",
    icon: IconType.KUBERNETES
  },
  {
    name: "Docker",
    icon: IconType.DOCKER
  },
];