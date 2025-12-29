import { Link } from "wouter";
import { Search } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 bg-background z-50 border-b border-border/40 px-4 py-3 flex items-center gap-4 md:gap-8 shadow-sm">
    <Link href="/">
      <div className="text-2xl font-bold tracking-tighter select-none cursor-pointer">
        <span className="text-google-blue">A</span>
        <span className="text-google-red">f</span>
        <span className="text-google-yellow">i</span>
        <span className="text-google-blue">f</span>
        <span className="text-google-green inline-block transform rotate-12">a</span>
      </div>
    </Link>
    
    <div className="flex-1 max-w-2xl relative hidden md:block">
      <input 
        type="text" 
        value="Afifa - Portfolio" 
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

const SubNav = ({ active }: { active: string }) => (
  <div className="px-4 md:px-[180px] py-0 border-b border-border/40 flex gap-6 overflow-x-auto text-sm text-muted-foreground">
    <Link href="/about"><div className={`py-3 cursor-pointer ${active === 'about' ? 'border-b-2 border-google-blue text-google-blue font-medium' : 'hover:text-foreground'}`}>Overview</div></Link>
    <Link href="/projects"><div className={`py-3 cursor-pointer ${active === 'projects' ? 'border-b-2 border-google-blue text-google-blue font-medium' : 'hover:text-foreground'}`}>Projects</div></Link>
    <Link href="/experience"><div className={`py-3 cursor-pointer ${active === 'experience' ? 'border-b-2 border-google-blue text-google-blue font-medium' : 'hover:text-foreground'}`}>Experience</div></Link>
    <Link href="/contact"><div className={`py-3 cursor-pointer ${active === 'contact' ? 'border-b-2 border-google-blue text-google-blue font-medium' : 'hover:text-foreground'}`}>Contact</div></Link>
  </div>
);

export const Projects = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <SubNav active="projects" />
    <main className="flex-1 px-4 md:px-[180px] py-6 max-w-[1400px]">
      <h1 className="text-3xl font-normal mb-4">Projects</h1>
      <p className="text-muted-foreground">Project showcase coming soon...</p>
    </main>
  </div>
);

export const Experience = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <SubNav active="experience" />
    <main className="flex-1 px-4 md:px-[180px] py-6 max-w-[1400px]">
      <h1 className="text-3xl font-normal mb-4">Experience</h1>
      <p className="text-muted-foreground">Work history coming soon...</p>
    </main>
  </div>
);

export const Contact = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <SubNav active="contact" />
    <main className="flex-1 px-4 md:px-[180px] py-6 max-w-[1400px]">
      <h1 className="text-3xl font-normal mb-4">Contact</h1>
      <p className="text-muted-foreground">Contact form coming soon...</p>
    </main>
  </div>
);
