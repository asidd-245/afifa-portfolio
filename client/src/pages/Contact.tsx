import { Search, Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        value="Afifa - Contact" 
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
    <Link href="/experience"><div className="py-3 hover:text-foreground cursor-pointer">Experience</div></Link>
    <Link href="/contact"><div className="py-3 border-b-2 border-google-blue text-google-blue font-medium cursor-pointer">Contact</div></Link>
  </div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <SubNav />
      
      <main className="flex-1 px-4 md:px-[180px] py-8 max-w-[1000px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info (Knowledge Panel Style) */}
          <div className="md:col-span-1 space-y-6">
            <Card className="overflow-hidden border-border shadow-sm">
              <div className="h-24 bg-secondary/50 relative">
                <div className="absolute -bottom-8 left-6 w-16 h-16 rounded-full bg-google-blue text-white flex items-center justify-center text-2xl font-bold border-4 border-background">
                  A
                </div>
              </div>
              <CardHeader className="pt-10 pb-2">
                <CardTitle className="text-2xl font-normal">Afifa</CardTitle>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <a href="mailto:afifa@example.com" className="flex items-center gap-3 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-google-red">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-google-blue">afifa@example.com</span>
                  </a>
                  
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-google-blue">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-google-blue">LinkedIn Profile</span>
                  </a>
                  
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="text-google-blue">GitHub Profile</span>
                  </a>
                  
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-google-blue">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <span className="text-google-blue">Twitter Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-secondary/20 rounded-xl p-4 border border-border/50">
              <h3 className="font-medium mb-2 text-sm">People also search for</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {['Frontend', 'Backend', 'Full Stack', 'UI/UX'].map((tag) => (
                  <div key={tag} className="flex-shrink-0 px-3 py-1 bg-background border border-border rounded-full text-xs text-muted-foreground">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Message Form (Gmail Style) */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-t-xl shadow-sm overflow-hidden">
              <div className="bg-secondary/80 px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="font-medium text-sm">New Message</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground font-medium ml-1">To</label>
                  <div className="flex items-center gap-2 px-3 py-2 bg-secondary/20 rounded-md border border-border/50">
                    <div className="w-5 h-5 rounded-full bg-google-blue text-white flex items-center justify-center text-xs">A</div>
                    <span className="text-sm">Afifa &lt;afifa@example.com&gt;</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground font-medium ml-1">Subject</label>
                  <Input placeholder="Project Inquiry" className="border-border/50 bg-transparent focus-visible:ring-google-blue/20" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground font-medium ml-1">Message</label>
                  <Textarea 
                    placeholder="Hi Afifa, I'd like to discuss a potential collaboration..." 
                    className="min-h-[200px] border-border/50 bg-transparent resize-none focus-visible:ring-google-blue/20 font-sans"
                  />
                </div>
                
                <div className="pt-2 flex items-center justify-between">
                  <Button className="bg-google-blue hover:bg-google-blue/90 text-white rounded-full px-6 gap-2">
                    Send <Send className="w-3 h-3" />
                  </Button>
                  <div className="flex gap-3 text-muted-foreground">
                    <span className="text-xs cursor-pointer hover:text-foreground">A</span>
                    <span className="text-xs cursor-pointer hover:text-foreground">📎</span>
                    <span className="text-xs cursor-pointer hover:text-foreground">📷</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-xs text-muted-foreground">
              <p>This form will open your default email client to send the message.</p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
