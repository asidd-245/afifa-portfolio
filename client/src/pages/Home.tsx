import { useState } from "react";
import { Search, User, FolderGit2, Briefcase, Mail, Mic, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase().includes("about")) setActiveSection("about");
    else if (searchQuery.toLowerCase().includes("project")) setActiveSection("projects");
    else if (searchQuery.toLowerCase().includes("experience")) setActiveSection("experience");
    else if (searchQuery.toLowerCase().includes("contact")) setActiveSection("contact");
    else window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  };

  const navItems = [
    { 
      id: "about", 
      label: "About", 
      icon: <User className="w-6 h-6 text-google-blue" />,
      color: "bg-google-blue/10 hover:bg-google-blue/20"
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: <FolderGit2 className="w-6 h-6 text-google-red" />,
      color: "bg-google-red/10 hover:bg-google-red/20"
    },
    { 
      id: "experience", 
      label: "Experience", 
      icon: <Briefcase className="w-6 h-6 text-google-yellow" />,
      color: "bg-google-yellow/10 hover:bg-google-yellow/20"
    },
    { 
      id: "contact", 
      label: "Contact", 
      icon: <Mail className="w-6 h-6 text-google-green" />,
      color: "bg-google-green/10 hover:bg-google-green/20"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Top Right Nav */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <a href="#" className="text-sm hover:underline">Gmail</a>
        <a href="#" className="text-sm hover:underline">Images</a>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
          <div className="grid grid-cols-3 gap-1 p-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-foreground/60 rounded-full" />
            ))}
          </div>
        </Button>
        <Button className="rounded-full bg-google-blue hover:bg-google-blue/90 text-white px-6">
          Sign in
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-2xl gap-8 -mt-20">
        {/* Logo */}
        <h1 className="text-[5.5rem] font-bold tracking-tighter select-none">
          <span className="text-google-blue">A</span>
          <span className="text-google-red">f</span>
          <span className="text-google-yellow">i</span>
          <span className="text-google-blue">f</span>
          <span className="text-google-green">a</span>
        </h1>

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
            <Button type="submit" variant="secondary" className="bg-secondary hover:border hover:border-input hover:shadow-sm text-sm px-6 h-9">
              Google Search
            </Button>
            <Button type="button" variant="secondary" className="bg-secondary hover:border hover:border-input hover:shadow-sm text-sm px-6 h-9">
              I'm Feeling Lucky
            </Button>
          </div>
        </form>

        {/* Navigation Circles */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mt-4 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="flex flex-col items-center gap-3 group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.color} bg-secondary`}>
                {item.icon}
              </div>
              <span className="text-sm text-foreground/80 group-hover:text-foreground font-medium">
                {item.label}
              </span>
            </button>
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

      {/* Content Dialogs */}
      <Dialog open={!!activeSection} onOpenChange={() => setActiveSection(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col p-0 gap-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              {activeSection === 'about' && <span className="text-google-blue">About Me</span>}
              {activeSection === 'projects' && <span className="text-google-red">Projects</span>}
              {activeSection === 'experience' && <span className="text-google-yellow">Experience</span>}
              {activeSection === 'contact' && <span className="text-google-green">Contact</span>}
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="flex-1 p-6 pt-2">
            {activeSection === 'about' && (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 rounded-full bg-google-blue/10 flex items-center justify-center text-4xl font-bold text-google-blue shrink-0">
                    A
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      Hello! I'm Afifa, a passionate developer and creative thinker based in Canada. 
                      I love building intuitive, user-centric digital experiences that solve real-world problems.
                    </p>
                    <p className="text-muted-foreground">
                      With a background in computer science and design, I bridge the gap between functionality and aesthetics.
                      When I'm not coding, you can find me exploring new technologies, reading, or hiking.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">UI/UX Design</Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="group-hover:text-google-blue transition-colors">Project {i}</CardTitle>
                      <CardDescription>A brief description of this amazing project.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full h-32 bg-secondary rounded-md mb-4 flex items-center justify-center text-muted-foreground">
                        Project Preview
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">Tech Stack</Badge>
                        <Badge variant="outline">Demo</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 relative pl-8 border-l-2 border-secondary pb-8 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-google-yellow border-4 border-background" />
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg">Senior Developer</h3>
                      <p className="text-muted-foreground">Tech Company Inc. • 202{i} - Present</p>
                      <p className="mt-2">
                        Led development of key features, improved performance by 40%, and mentored junior developers.
                        Collaborated with cross-functional teams to deliver high-quality software.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-6">
                <p className="text-center text-lg text-muted-foreground">
                  I'm always open to new opportunities and collaborations.
                </p>
                <form className="space-y-4 max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <Button className="w-full bg-google-blue hover:bg-google-blue/90">
                    Send Message
                  </Button>
                </form>
                <div className="flex justify-center gap-6 mt-8">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-google-blue/10 hover:text-google-blue">
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-google-blue/10 hover:text-google-blue">
                    <Briefcase className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-google-blue/10 hover:text-google-blue">
                    <User className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
