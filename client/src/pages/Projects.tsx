import { Search, MoreVertical, Globe, FolderGit2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => (
  <header className="sticky top-0 bg-background z-50 border-b border-border/40 px-4 py-3 flex items-center gap-4 md:gap-8 shadow-sm">
    <Link href="/">
      <div className="text-2xl font-bold tracking-tighter select-none cursor-pointer">
        <span className="text-google-blue">a</span>
        <span className="text-google-red">f</span>
        <span className="text-google-yellow">o</span>
        <span className="text-google-blue">o</span>
        <span className="text-google-green">f</span>
        <span className="text-google-red">l</span>
        <span className="text-google-blue inline-block transform rotate-12">e</span>
      </div>
    </Link>
    
    <div className="flex-1 max-w-2xl relative hidden md:block">
      <input 
        type="text" 
        value="Afifa - Projects" 
        readOnly
        className="w-full h-10 pl-4 pr-12 rounded-full border border-input bg-secondary/30 hover:bg-secondary/50 hover:shadow-sm focus:outline-none focus:shadow-md transition-all"
      />
      <Search className="absolute right-4 top-2.5 w-5 h-5 text-google-blue" />
    </div>
    
    <div className="ml-auto flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-google-blue text-white flex items-center justify-center font-bold">A</div>
    </div>
  </header>
);

const SubNav = () => (
  <div className="px-4 md:px-[180px] py-0 border-b border-border/40 flex gap-6 overflow-x-auto text-sm text-muted-foreground">
    <Link href="/about"><div className="py-3 hover:text-foreground cursor-pointer">Overview</div></Link>
    <Link href="/projects"><div className="py-3 border-b-2 border-google-blue text-google-blue font-medium cursor-pointer">Projects</div></Link>
    <Link href="/experience"><div className="py-3 hover:text-foreground cursor-pointer">Experience</div></Link>
    <Link href="/contact"><div className="py-3 hover:text-foreground cursor-pointer">Contact</div></Link>
  </div>
);

interface ProjectResultProps {
  title: string;
  url: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
  image?: string;
}

const ProjectResult = ({ title, url, description, tags, icon, image }: ProjectResultProps) => (
  <div className="max-w-[600px] mb-8 group">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center border border-border">
        {icon || <FolderGit2 className="w-4 h-4 text-foreground" />}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-foreground font-medium">Afifa's Portfolio</span>
        <span className="text-xs text-muted-foreground">{url}</span>
      </div>
      <MoreVertical className="w-4 h-4 text-muted-foreground ml-auto cursor-pointer" />
    </div>
    
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block w-fit">
          <h3 className="text-xl text-google-blue font-medium mb-1 group-hover:underline decoration-google-blue decoration-2 cursor-pointer">{title}</h3>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 overflow-hidden border-border shadow-lg" side="right" align="start">
        <div className="relative aspect-video bg-secondary">
          <img 
            src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white font-medium text-sm">{title} Preview</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    
    <p className="text-sm text-foreground/80 leading-relaxed mb-2">
      {description}
    </p>
    
    <div className="flex gap-2 mt-2">
      {tags.map((tag, i) => (
        <Badge key={i} variant="secondary" className="rounded-full px-3 py-0.5 text-xs font-normal bg-secondary hover:bg-secondary/80 border border-border/50">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "StressSens: AI-Powered Stress Monitoring",
      url: "https://github.com/asidd-245/StressSens",
      description: "Engineered a full-stack stress-monitoring pipeline using JavaScript, Node.js, and Apple Watch health-signal processing. Built personalized coaching features using OpenAI LLMs and deployed a Dockerized Node.js backend.",
      tags: ["JavaScript", "Node.js", "OpenAI API", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "PillSync - Medication Tracking App",
      url: "https://github.com/asidd-245/PillSync",
      description: "Built a full-stack medication-tracking web app using React & Node.js. Designed an interaction-analysis engine using RxNorm & OpenFDA APIs to generate reliable risk assessments for users.",
      tags: ["React", "Node.js", "RxNorm", "OpenFDA"],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "SpeakEasy: ALS Morse Code Translator",
      url: "https://github.com/asidd-245/SpeakEasy",
      description: "Developed an assistive-communication system using STM32 microcontrollers, C++, and capacitive touch sensors. Enabled hands-free Morse-code input for ALS patients, improving communication accuracy.",
      tags: ["C++", "STM32", "Embedded Systems", "Assistive Tech"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <SubNav />
      
      <main className="flex-1 px-4 md:px-[180px] py-6 pb-12">
        <div className="text-sm text-muted-foreground mb-4">
          About {projects.length} results (0.42 seconds)
        </div>

        <div className="space-y-2">
          {projects.map((project, index) => (
            <ProjectResult key={index} {...project} />
          ))}
        </div>

        {/* Pagination Style Footer */}
        <div className="mt-12 max-w-[600px] flex justify-center">
          <div className="flex items-end gap-1 select-none">
            <span className="text-google-blue text-4xl font-bold tracking-tighter">G</span>
            <div className="flex">
              <span className="text-google-red text-4xl font-bold tracking-tighter">o</span>
              <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
              <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
              <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
              <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
              <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
            </div>
            <span className="text-google-blue text-4xl font-bold tracking-tighter">g</span>
            <span className="text-google-green text-4xl font-bold tracking-tighter">l</span>
            <span className="text-google-red text-4xl font-bold tracking-tighter">e</span>
            <span className="text-google-blue text-4xl font-bold tracking-tighter ml-2">&gt;</span>
          </div>
        </div>
      </main>
    </div>
  );
}
