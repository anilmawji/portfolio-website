import canada_logo from '../assets/logos/canada-logo.png';
import arcurve_logo from '../assets/logos/arcurve-logo.png';
import stampede_logo from '../assets/logos/stampede-logo.png';
import starburst_logo from '../assets/logos/starburst-logo.png';
import { ToolInfoMap as Tool, ToolInfo } from './ToolInfo';
import { AccordionData } from 'components/accordion/Accordion';

export type JobData = {
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
  tools: (ToolInfo | string)[];
};

export const JobAccordionData: AccordionData[] = [
  {
    title: "DevSecOps Intern",
    image: canada_logo,
    imageLink: "https://www.canada.ca/en.html"
  },
  {
    title: "Software Developer Intern",
    image: arcurve_logo,
    imageLink: "https://www.arcurve.com/"
  },
  {
    title: "IT Coordinator Intern",
    image: arcurve_logo,
    imageLink: "https://www.arcurve.com/"
  },
  {
    title: "Application Support Analyst",
    image: stampede_logo,
    imageLink: "https://www.calgarystampede.com/"
  },
  {
    title: "Internal Support Specialist",
    image: starburst_logo,
    imageLink: "https://www.starburst.io/"
  }
];

export const JobData: JobData[] = [
  {
    organization: "Government of Canada",
    location: "Ottawa, Ontario",
    startDate: "May 2024",
    endDate: "Aug 2024",
    bulletPoints: [
      "Utilized Azure Kubernetes Service to deploy a custom instance of JupyterHub for the SOC, integrating Entra ID to delegate access effectively.",
      "Created a CI/CD pipeline to automate upgrades to the Jupyter development & production environments, reducing deployment time by 70%.",
      "Wrote Python notebooks to create a dashboard that ingests data from Azure Sentinel and VirusTotal, automating threat discovery and analysis.",
      "Developed a custom solution to secure Kubernetes secrets, ensuring API keys were safely accessible to Jupyter pods."
    ],
    tools: [Tool.PYTHON, Tool.BASH, Tool.AZURE, Tool.KUBERNETES, Tool.DOCKER, Tool.JUPYTER, Tool.LINUX, Tool.JIRA, Tool.GIT]
  },
  {
    organization: "Arcurve Inc.",
    location: "Calgary, Alberta",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    bulletPoints: [
      "Built 10 data pipelines in Azure Data Factory to support an internal web API that assisted with project management.",
      "Leveraged Pulumi to define internal cloud infrastructure as Python code for over 30 running services in Azure.",
      "Automated employee account creation and provisioning in Azure with PowerShell scripts."
    ],
    tools: [Tool.AZURE, Tool.PYTHON, Tool.PULUMI, Tool.DATA_FACTORY, Tool.POWERSHELL, Tool.JIRA, Tool.GIT]
  },
  {
    organization: "Arcurve Inc.",
    location: "Calgary, Alberta",
    startDate: "Jan 2023",
    endDate: "Aug 2023",
    bulletPoints: [
      "Collaborated with a colleague to successfully deploy Microsoft Defender for Endpoint to over 300 devices for a key client.",
      "Raised Microsoft Secure Score by a total of 10% by refining endpoint policies.",
      "Created 20 firewall, antivirus and attack surface reduction rules tailored to a client's hybrid cloud environment.",
      "Securely migrated all company secrets to a new secrets manager with a zero-trust model.",
      "Closed 250 helpdesk tickets related to troubleshooting and access control with a 98% success rate.",
      "Fully automated device provisioning by deploying Windows Autopilot to over 100 employee laptops."
    ],
    tools: [Tool.AZURE, Tool.MICROSOFT_DEFENDER, Tool.POWERSHELL, Tool.JIRA, Tool.GIT]
  },
  {
    organization: "The Calgary Stampede",
    location: "Calgary, Alberta",
    startDate: "May 2022",
    endDate: "Aug 2022",
    bulletPoints: [
      "Worked in a team of 5 to program, deploy, and support 75 iOS-based POS systems across Stampede Park",
      "Remained onsite to troubleshoot payment systems in high-pressure situations with hundreds of customers",
      "Trained 10 cashiers and bartenders to excel in operating POS equipment"
    ],
    tools: [Tool.MANAGEENGINE, Tool.LIGHTSPEED, Tool.MONERIS]
  },
  {
    organization: "Starburst Data",
    location: "Boston, Massachusetts (Remote)",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    bulletPoints: [
      "Onboarded 20 new employees by provisioning Okta SSO, updating security permissions, and assigning software licenses",
      "Developed knowledge base by writing concise FAQ pages and a comprehensive 8-page macOS troubleshooting guide, reducing the volume of support tickets."
    ],
    tools: [Tool.OKTA, Tool.JIRA]
  }
];