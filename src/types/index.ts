export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    details?: {
      challenge: string;
      solution: string;
      outcome: string;
      technologies: string[];
    };
  };
  
  export type SocialLink = {
    name: string;
    url: string;
    icon: React.ReactNode;
  };
  
  export type Expertise = {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  
  export type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };