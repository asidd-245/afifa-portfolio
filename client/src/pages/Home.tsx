import { useState } from "react";
import { Search, User, FolderGit2, Briefcase, Linkedin, Github, FileText, Mic, Camera, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { SearchOverlay } from "@/components/SearchOverlay";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [, setLocation] = useLocation();

  // Random facts about Afifa
  const afifaFacts = [
    "Afifa is studying Computer Engineering at the University of Waterloo",
    "Afifa started her coding journey in grade 7 - a true early starter!",
    "Afifa was president of Girls Who Code at her school for 5 years!",
    "Afifa has expertise in React, Node.js, and TypeScript",
    "Afifa builds innovative full-stack applications with modern web technologies",
    "Afifa is passionate about AI integration and creative problem-solving",
    "Afifa's favorite color is blue - any shade of it!",
    "Afifa is a coffee enthusiast who codes best with a good cup of coffee",
    "Afifa is a matcha addict and loves trying different matcha drinks",
    "Afifa enjoys painting in her free time",
    "Afifa loves building robots and working on hardware projects",
    "Afifa has experience developing responsive web platforms",
    "Afifa is skilled in both frontend and backend development",
    "Afifa creates user-friendly interfaces with attention to detail",
    "Afifa continuously learns and adapts to new technologies",
    "Afifa excels at transforming complex problems into elegant solutions",
    "Afifa has a proven track record of delivering high-quality projects",
    "Afifa combines technical excellence with creative innovation",
    "Afifa is proficient in modern development tools and best practices",
    "Afifa has strong experience with database design and optimization",
    "Afifa writes clean, maintainable, and well-documented code",
    "Afifa is skilled at collaborating in team environments",
    "Afifa stays up-to-date with the latest web development trends",
    "Afifa has experience with version control and agile methodologies",
    "Afifa can debug complex issues efficiently and effectively",
    "Afifa designs scalable and performant web applications",
    "Afifa has a keen eye for UI/UX design principles",
    "Afifa balances her technical skills with creative hobbies like painting",
    "Afifa's robotics projects showcase her hardware and software integration skills",
  ];

  // Things Afifa might have searched before
  const afifaSearches = [
    "best practices for React hooks 2024",
    "TypeScript generics tutorial",
    "how to optimize database queries",
    "modern CSS animations",
    "Node.js performance tips",
    "system design interview questions",
    "Waterloo computer engineering courses",
    "full stack developer roadmap",
    "AI integration in web apps",
    "responsive design patterns",
    "git workflow best practices",
    "debugging React performance issues",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query === "contact") {
      setLocation("/contact");
    } else if (query) {
      setCurrentQuery(searchQuery);
      setShowSearchOverlay(true);
    }
  };

  const handleFeelingLucky = () => {
    // Show a random fact about Afifa
    const randomFact = afifaFacts[Math.floor(Math.random() * afifaFacts.length)];
    setCurrentQuery(randomFact);
    setShowSearchOverlay(true);
  };

  const navItems = [
    { 
      id: "about", 
      label: "About", 
      icon: <User className="w-6 h-6 text-google-blue" />,
      color: "bg-google-blue/10 hover:bg-google-blue/20",
      path: "/about",
      isLink: true
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: <FolderGit2 className="w-6 h-6 text-google-red" />,
      color: "bg-google-red/10 hover:bg-google-red/20",
      path: "/projects",
      isLink: true
    },
    { 
      id: "experience", 
      label: "Experience", 
      icon: <Briefcase className="w-6 h-6 text-google-yellow" />,
      color: "bg-google-yellow/10 hover:bg-google-yellow/20",
      path: "/experience",
      isLink: true
    },
    { 
      id: "linkedin", 
      label: "LinkedIn", 
      icon: <Linkedin className="w-6 h-6 text-google-blue" />,
      color: "bg-google-blue/10 hover:bg-google-blue/20",
      href: "https://linkedin.com/in/afifa-siddiqua/",
      isLink: false
    },
    { 
      id: "twitter", 
      label: "X", 
      icon: <Twitter className="w-6 h-6 text-google-red" />,
      color: "bg-google-red/10 hover:bg-google-red/20",
      href: "https://twitter.com", // Update with your X/Twitter profile
      isLink: false
    },
    { 
      id: "github", 
      label: "GitHub", 
      icon: <Github className="w-6 h-6 text-google-yellow" />,
      color: "bg-google-yellow/10 hover:bg-google-yellow/20",
      href: "https://github.com/asidd-245",
      isLink: false
    },
    { 
      id: "resume", 
      label: "Resume", 
      icon: <FileText className="w-6 h-6 text-google-green" />,
      color: "bg-google-green/10 hover:bg-google-green/20",
      href: "/resume.pdf",
      isLink: false
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Top Right Nav */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <a href="#" className="text-sm hover:underline">Images</a>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
          <div className="grid grid-cols-3 gap-1 p-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-foreground/60 rounded-full" />
            ))}
          </div>
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-2xl gap-8 -mt-20">
        {/* Logo - Thinner and Tilted */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[5.5rem] font-medium tracking-tighter select-none">
            <span className="text-google-blue">a</span>
            <span className="text-google-red">f</span>
            <span className="text-google-yellow">o</span>
            <span className="text-google-blue">o</span>
            <span className="text-google-green">f</span>
            <span className="text-google-red">l</span>
            <span className="text-google-blue inline-block transform rotate-12">e</span>
          </h1>
          <p className="text-sm text-muted-foreground -mt-4">
            afifa siddiqua's personal search engine
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full relative group">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              className="w-full h-12 pl-12 pr-24 rounded-full border border-input hover:shadow-md focus-visible:ring-0 focus-visible:shadow-md transition-shadow text-base"
              placeholder="Search Afifa's portfolio or type a URL"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-4 flex items-center gap-3">
              <Mic className="w-5 h-5 text-google-blue cursor-pointer hover:scale-110 transition-transform" />
              <Camera className="w-5 h-5 text-google-blue cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            <Button 
              type="button" 
              variant="secondary" 
              className="bg-secondary hover:border hover:border-input hover:shadow-sm text-sm px-6 h-9"
              onClick={() => setLocation("/contact")}
            >
              contact
            </Button>
            <Button 
              type="button" 
              variant="secondary" 
              className="bg-secondary hover:border hover:border-input hover:shadow-sm text-sm px-6 h-9"
              onClick={handleFeelingLucky}
            >
              I'm Feeling Lucky (afifafied)
            </Button>
          </div>
        </form>

        {/* Navigation Circles */}
        <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-8 mt-4 w-full">
          {navItems.map((item) => (
            item.isLink ? (
              <Link key={item.id} href={item.path}>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.color} bg-secondary`}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground font-medium">
                    {item.label}
                  </span>
                </div>
              </Link>
            ) : (
              <a 
                key={item.id} 
                href={item.href} 
                target={item.href?.startsWith('http') ? "_blank" : undefined}
                rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.color} bg-secondary`}>
                  {item.icon}
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground font-medium">
                  {item.label}
                </span>
              </a>
            )
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-secondary text-muted-foreground text-sm">
        <div className="px-8 py-3 border-b border-input">
          Canada
        </div>
        <div className="px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>

      {/* Search Overlay */}
      <SearchOverlay
        open={showSearchOverlay}
        query={currentQuery}
        onClose={() => setShowSearchOverlay(false)}
      />
    </div>
  );
}
