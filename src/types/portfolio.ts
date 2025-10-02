export interface Project {
    title: string;
    description: string;
    stack?: string[];
    backend?: string;
    deploy?: string;
    demoUrl?: string;
    repoUrl?: string;
  }
  
  export interface TimelineItem {
    title: string;
    center: string;
    location?: string;
    start: string;
    end?: string;
    description?: string;
    tags?: string[];
    link?: string;
  }
  