export interface Skill {
    title: string;
    proficiency: string;
  }
  
  export interface Experience {
    id: number;
    role: string;
    location: string;
    workStyle: string;
    jobType: string;
    responsibilities: string[];
    company: string;
  }
  
  export interface Education {
    university: string;
    title: string;
    branch: string;
   
    activities: string[];
    link: string;
  }
  
  export interface Certification {
    title: string;
    other: string;
    expiry: string;
    link: string;
  }
  
  export interface Publication {
    title: string;
    other: string;
    expiry: string;
    link: string;
  }
  
  export interface Volunteering {
    title: string;

    other: string;
    link: string;
  }
  
  export interface ContactDetails {
    email: string;
    phone: string;
    portfolioPage: string;
  }
  
  export interface Social {
    
    github: string;
  }
  
  export interface ResumeData {
    name: string;
    oneLineDescription: string;
    address: string;
    linkedIn: string;
    CarrerObjective: string;
    skillset: Skill[];
    experiences: Experience[];
    education: Education[];
    certifications: Certification[];
    publications: Publication[];
    contactDetails: ContactDetails;
    volunteering: Volunteering[];
    social: Social;
  }
  