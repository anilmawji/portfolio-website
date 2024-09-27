import security_plus from '/src/assets/certifications/security-plus.svg';
import a_plus from '/src/assets/certifications/a-plus.svg';
import az_900 from '/src/assets/certifications/az-900.png';

export type CertificationData = {
  name: string;
  image: string;
  imagePadding?: string;
  link: string;
};

export const Certifications: CertificationData[] = [
  {
    name: "CompTIA Security+",
    image: security_plus,
    link: "https://www.credly.com/badges/dd7d1c5e-e486-42c0-a158-bf4aedf8b2e2"
  },
  {
    name: "CompTIA A+",
    image: a_plus,
    link: "https://www.credly.com/badges/b03af6e2-45e1-420d-b564-b1e2f20da988"
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    image: az_900,
    imagePadding: "12px",
    link: "https://www.credly.com/badges/d63c2487-af0c-4141-a69f-f2b17d503b47"
  }
];