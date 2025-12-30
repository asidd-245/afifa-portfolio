import { Search, MapPin, Calendar, Link as LinkIcon, Share2, MoreVertical, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header - Google Search Style */}
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
            value="Afifa - About Me" 
            readOnly
            className="w-full h-10 pl-4 pr-12 rounded-full border border-input bg-secondary/30 hover:bg-secondary/50 hover:shadow-sm focus:outline-none focus:shadow-md transition-all"
          />
          <Search className="absolute right-4 top-2.5 w-5 h-5 text-google-blue" />
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-google-blue text-white flex items-center justify-center font-bold overflow-hidden">
            <img src="/images/profile.jpg" alt="A" className="w-full h-full object-cover" />
        </div>
        </div>
      </header>

      {/* Sub-navigation */}
      <div className="px-4 md:px-[180px] py-0 border-b border-border/40 flex gap-6 overflow-x-auto text-sm text-muted-foreground">
        <div className="py-3 border-b-2 border-google-blue text-google-blue font-medium cursor-pointer">Overview</div>
        <Link href="/projects"><div className="py-3 hover:text-foreground cursor-pointer">Projects</div></Link>
        <Link href="/experience"><div className="py-3 hover:text-foreground cursor-pointer">Experience</div></Link>
        <Link href="/contact"><div className="py-3 hover:text-foreground cursor-pointer">Contact</div></Link>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-4 md:px-[180px] py-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 max-w-[1400px]">
        
        {/* Left Column - Search Results Style */}
        <div className="space-y-8">
          
          {/* Top Result / Intro */}
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">About Afifa</div>
            <h1 className="text-3xl font-normal text-foreground">Afifa</h1>
            <div className="text-muted-foreground">Full Stack Developer • Creative Thinker</div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[300px] rounded-2xl overflow-hidden">
            <div className="col-span-2 row-span-2 bg-secondary relative group cursor-pointer">
              <img src="/images/profile.jpg" alt="Afifa Siddiqua" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="bg-secondary relative group cursor-pointer">
              <img src="/images/photo3.jpg" alt="Afifa" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="bg-secondary relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="col-span-2 bg-secondary relative group cursor-pointer">
              <img src="/images/group.jpg" alt="Team Collaboration" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            </div>
          </div>

          {/* About Blurb */}
          <div className="space-y-4">
            <h2 className="text-2xl font-normal">About</h2>
            <p className="text-foreground/80 leading-relaxed">
              I am a Computer Engineering student at the University of Waterloo with a passion for software development, AI, and embedded systems. 
              My experience spans from developing BMS software for electric vehicles to building AI-powered web applications.
              I have a strong foundation in languages like Java, C++, and Python, and I enjoy working with modern frameworks like React and Node.js.
            </p>
            <div className="flex gap-2 text-sm text-google-blue cursor-pointer hover:underline">
              <span>Wikipedia</span>
              <span>•</span>
              <span>LinkedIn</span>
              <span>•</span>
              <span>GitHub</span>
            </div>
          </div>

          {/* My Story / Timeline */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-normal">My Story</h2>
              <Button variant="ghost" size="sm" className="rounded-full"><ChevronRight className="w-4 h-4" /></Button>
            </div>
            
            <div className="relative pl-4 border-l border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-google-blue border-2 border-background"></div>
                <div className="text-sm text-muted-foreground mb-1">2018</div>
                <h3 className="font-medium">The Spark</h3>
                <p className="text-sm text-muted-foreground mt-1">Wrote my first line of code in Python. Realized the power of automation and creation.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-google-red border-2 border-background"></div>
                <div className="text-sm text-muted-foreground mb-1">2020</div>
                <h3 className="font-medium">University Journey</h3>
                <p className="text-sm text-muted-foreground mt-1">Started Computer Science degree. Deep dived into algorithms and data structures.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-google-yellow border-2 border-background"></div>
                <div className="text-sm text-muted-foreground mb-1">2022</div>
                <h3 className="font-medium">First Internship</h3>
                <p className="text-sm text-muted-foreground mt-1">Worked as a Junior Dev at a startup. Learned React and modern web development.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-google-green border-2 border-background"></div>
                <div className="text-sm text-muted-foreground mb-1">Present</div>
                <h3 className="font-medium">Building the Future</h3>
                <p className="text-sm text-muted-foreground mt-1">Focusing on full-stack development and exploring AI integration in web apps.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Knowledge Panel */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden border border-border shadow-sm">
            <div className="h-32 bg-gradient-to-r from-google-blue/20 via-google-red/20 to-google-yellow/20"></div>
            <div className="px-6 pb-6 -mt-12">
              <div className="w-24 h-24 rounded-full border-4 border-background bg-white overflow-hidden shadow-sm mb-4">
                 <img src="/images/profile.jpg" alt="Afifa Siddiqua" className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-3xl font-normal mb-1">Afifa Siddiqua</h2>
              <p className="text-muted-foreground mb-4">Computer Engineering Student</p>
              
              <div className="flex gap-2 mb-6">
                <Button className="bg-google-blue hover:bg-google-blue/90 text-white rounded-full px-6">Follow</Button>
                <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
              </div>

              <p className="text-sm leading-relaxed mb-6">
                Afifa is a Computer Engineering student at the University of Waterloo, experienced in full-stack development, embedded systems, and AI integration.
              </p>

              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-bold">Born</span>
                  <span>Canada</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-bold">Education</span>
                  <span className="text-google-blue cursor-pointer hover:underline">University of Waterloo (BASc)</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-bold">Experience</span>
                  <span>5+ Years</span>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="font-medium mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">Java</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">C++</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">Python</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">ReactJS</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">NodeJS</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">SQL</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">AWS</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-normal hover:bg-secondary/80">Docker</Badge>
              </div>

              <h3 className="font-medium mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">Leadership</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">Communication</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">Problem Solving</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">Teamwork</Badge>
              </div>

              <Separator className="my-6" />
              
              <h3 className="font-medium mb-4">Profiles</h3>
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/80">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Website</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/80">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">LinkedIn</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/80">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">GitHub</span>
                </div>
              </div>

            </div>
          </Card>
        </div>

      </main>
    </div>
  );
}
