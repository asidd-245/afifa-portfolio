import { Search, Briefcase, Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
        value="Afifa - Experience" 
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
  <div className="px-4 md:px-[180px] py-0 border-b border-border/40 flex gap-6 overflow-x-auto text-sm text-muted-foreground sticky top-[65px] bg-background z-40">
    <Link href="/about"><div className="py-3 hover:text-foreground cursor-pointer">Overview</div></Link>
    <Link href="/projects"><div className="py-3 hover:text-foreground cursor-pointer">Projects</div></Link>
    <Link href="/experience"><div className="py-3 border-b-2 border-google-blue text-google-blue font-medium cursor-pointer">Experience</div></Link>
    <Link href="/contact"><div className="py-3 hover:text-foreground cursor-pointer">Contact</div></Link>
  </div>
);

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  color: string;
  image?: string;
}

const ExperienceItem = ({ role, company, period, location, description, color, image }: ExperienceItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="relative pl-8 md:pl-20 py-8 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-[11px] md:left-[67px] top-0 bottom-0 w-[2px] bg-border group-last:bottom-auto group-last:h-full" />
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 md:left-[48px] top-10 w-6 h-6 rounded-full border-4 border-background ${color} shadow-sm z-10`} />
      
      {/* Company Logo/Image */}
      {image && (
        <div className="absolute left-8 md:left-0 top-8 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border border-border bg-white shadow-sm">
          <img src={image} alt={company} className="w-full h-full object-contain p-1" />
        </div>
      )}
      
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{role}</h3>
            <div className="text-lg text-google-blue font-medium">{company}</div>
          </div>
          <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground gap-1">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-foreground/80 leading-relaxed flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Lead",
      company: "Battery Workforce Challenge by Stellantis",
      period: "Sept 2025 - Present",
      location: "Waterloo, ON",
      description: [
        "Developed BMS software using C++, Python, & CAN bus tooling to enable real-time battery monitoring.",
        "Modeled and validated Li-ion cells in MATLAB & Simulink, improving performance accuracy & safety evaluations.",
        "Integrated sensor data with embedded systems using Git & automated testing streamlining software reliability."
      ],
      color: "bg-google-blue",
      image: "/images/battery-workforce.jpg"
    },
    {
      role: "Digital Transformation Intern",
      company: "Saint Elizabeth Healthcare",
      period: "Apr 2025 - Aug 2025",
      location: "Markham, ON",
      description: [
        "Automated data pipelines using Python ETL scripts, reducing clinical reporting cycle times by 40%.",
        "Built interactive KPI dashboards in Power BI and MicroStrategy, increasing operational insight coverage by 30%.",
        "Researched AI-agent applications using LLM frameworks and technical feasibility analysis, identifying 5+ high-impact opportunities.",
        "Supported project management using Scrum reports & Monday.com, ensuring timely hospital report delivery."
      ],
      color: "bg-google-red",
      image: "/images/saint-elizabeth.jpg"
    },
    {
      role: "Team Leader",
      company: "Durham Regional Police",
      period: "Jun 2024 - Sept 2024",
      location: "Durham, ON",
      description: [
        "Coordinated Community, Advocacy, & Networking (CAN) conference operations using digital communication tools.",
        "Enhanced program efficiency using Excel tracking systems, improving operational organization and reporting clarity.",
        "Mentored 100+ students using structured training, strengthening leadership and advocacy skill development."
      ],
      color: "bg-google-yellow",
      image: "/images/durham-police.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <SubNav />
      
      <main className="flex-1 px-4 md:px-[180px] py-12 max-w-[1000px] mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-normal mb-2">Work Experience</h1>
          <p className="text-muted-foreground">My professional journey and career milestones</p>
        </div>

        <div className="relative pb-24">
          {/* Vertical Line Background */}
          <div className="absolute left-[11px] md:left-[67px] top-4 bottom-0 w-[2px] bg-border/50" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
        
        <div className="text-center text-muted-foreground text-sm pb-12">
          End of timeline
        </div>
      </main>
    </div>
  );
}
