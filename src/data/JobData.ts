import canada_logo from '../assets/logos/canada-logo.png';
import arcurve_logo from '../assets/logos/arcurve-logo.png';
import stampede_logo from '../assets/logos/stampede-logo.png';
import starburst_logo from '../assets/logos/starburst-logo.png';

export type JobInfo = {
  title: string;
  organization: string;
  link: string;
  logo: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
};

export const JobData: JobInfo[] = [
  {
    title: "DevSecOps Intern",
    organization: "Government of Canada",
    link: "https://www.canada.ca/en.html",
    logo: canada_logo,
    startDate: "May",
    endDate: "August 2024",
    bulletPoints: [
      "Something1",
      "Something2"
    ]
  },
  {
    title: "Software Developer Intern",
    organization: "Arcurve Inc.",
    link: "https://www.arcurve.com/",
    logo: arcurve_logo,
    startDate: "September",
    endDate: "December 2023",
    bulletPoints: [
      "Something1",
      "Something2"
    ]
  },
  {
    title: "IT Coordinator Intern",
    organization: "Arcurve Inc.",
    link: "https://www.arcurve.com/",
    logo: arcurve_logo,
    startDate: "January",
    endDate: "August 2023",
    bulletPoints: [
      "Something1",
      "Something2"
    ]
  },
  {
    title: "Application Support Analyst",
    organization: "The Calgary Stampede",
    link: "https://www.calgarystampede.com/",
    logo: stampede_logo,
    startDate: "May",
    endDate: "August 2022",
    bulletPoints: [
      "Something1",
      "Something2"
    ]
  },
  {
    title: "Internal Support Specialist",
    organization: "Starburst Data",
    link: "https://www.starburst.io/",
    logo: starburst_logo,
    startDate: "June",
    endDate: "August 2021",
    bulletPoints: [
      "Something1",
      "Something2"
    ]
  }
];