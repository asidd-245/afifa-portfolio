import { Search, Globe } from "lucide-react";
import { Link } from "wouter";
import { SearchResult } from "@/components/SearchResult";

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

export default function Projects() {
  const projects = [
    {
      title: "StressSens: AI-Powered Stress Monitoring",
      url: "github.com/asidd-245/stress-monitor-extension",
      description: "Engineered a full-stack stress-monitoring pipeline using JavaScript, Node.js, and Apple Watch health-signal processing. Built personalized coaching features using OpenAI LLMs and deployed a Dockerized Node.js backend.",
      tags: ["JavaScript", "Node.js", "OpenAI API", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
      href: "https://github.com/asidd-245/stress-monitor-extension"
    },
    {
      title: "PillSync - Medication Tracking App",
      url: "github.com/advitiya6594/PillSync",
      description: "Built a full-stack medication-tracking web app using React & Node.js. Designed an interaction-analysis engine using RxNorm & OpenFDA APIs to generate reliable risk assessments for users.",
      tags: ["React", "Node.js", "RxNorm", "OpenFDA"],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
      href: "https://github.com/advitiya6594/PillSync"
    },
    {
      title: "SpeakEasy: ALS Morse Code Translator",
      url: "github.com/asidd-245/SpeakEasy",
      description: "Developed an assistive-communication system using STM32 microcontrollers, C++, and capacitive touch sensors. Enabled hands-free Morse-code input for ALS patients, improving communication accuracy.",
      tags: ["C++", "STM32", "Embedded Systems", "Assistive Tech"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      href: "https://github.com/asidd-245/SpeakEasy"
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
            <SearchResult key={index} {...project} />
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
