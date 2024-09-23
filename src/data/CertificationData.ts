import { AccordionData } from 'components/accordion/Accordion';
import security_plus from '../assets/certifications/security-plus.svg';
import a_plus from '../assets/certifications/a-plus.svg';
import az_900 from '../assets/certifications/az-900.png';

export const CertificationData: AccordionData[] = [
  {
    title: "CompTIA Security+",
    image: security_plus,
    imageLink: "https://www.canada.ca/en.html",
  },
  {
    title: "CompTIA A+",
    image: a_plus,
    imageLink: "https://www.canada.ca/en.html",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    image: az_900,
    imageLink: "https://www.canada.ca/en.html",
  }
];