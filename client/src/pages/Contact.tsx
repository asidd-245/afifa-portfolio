import { Mail, Github, Linkedin, Calendar, Send, Maximize2, X, Type, Paperclip, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

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
        value="Afifa - Contact" 
        readOnly
        className="w-full h-10 pl-4 pr-12 rounded-full border border-input bg-secondary/30 hover:bg-secondary/50 hover:shadow-sm focus:outline-none focus:shadow-md transition-all"
      />
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

// Contact Card Component
function ContactCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Colorful accent bars */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-blue-600"></div>
        <div className="flex-1 bg-red-500"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-green-500"></div>
      </div>

      {/* Profile Avatar */}
      <div className="flex justify-center mb-6 mt-2">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-600 bg-google-blue flex items-center justify-center">
            <span className="text-white text-5xl font-bold">A</span>
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-gray-900 text-2xl font-bold mb-2">Afifa Siddiqua</h1>
        <p className="text-gray-600">Software Engineer</p>
      </div>

      {/* Contact Links */}
      <div className="space-y-4">
        <a 
          href="mailto:afifasiddiqua24@gmail.com"
          className="flex items-center gap-3 text-red-600 hover:bg-red-50 p-3 rounded-lg transition-colors group border-l-4 border-red-600"
        >
          <Mail className="w-5 h-5" />
          <span className="group-hover:underline text-sm">afifasiddiqua24@gmail.com</span>
        </a>

        <a 
          href="https://linkedin.com/in/afifa-siddiqua/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-colors group border-l-4 border-blue-600"
        >
          <Linkedin className="w-5 h-5" />
          <span className="group-hover:underline text-sm">LinkedIn Profile</span>
        </a>

      

        <a 
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3W5CblTU13nmEyUwKUmnfg_pZpJrxacG1O3vdQ8yBjw4FfxPTkzG_vTnUrG4jKxMI6gthPoQHN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors group border-l-4 border-green-600"
        >
          <Calendar className="w-5 h-5" />
          <span className="group-hover:underline text-sm">Schedule a Meeting</span>
        </a>
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:afifasiddiqua24@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
    setFormData({ subject: '', message: '' });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header with Google color accent */}
      <div className="relative flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-blue-600"></div>
          <div className="flex-1 bg-red-500"></div>
          <div className="flex-1 bg-yellow-500"></div>
          <div className="flex-1 bg-green-500"></div>
        </div>
        <h2 className="text-gray-900 font-semibold">New Message</h2>
        <div className="flex items-center gap-1">
          <button 
            type="button"
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Maximize"
          >
            <Maximize2 className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            type="button"
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* To Field */}
        <div>
          <label className="block text-blue-600 mb-3 text-sm font-medium">To</label>
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border-l-4 border-blue-600">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-600 bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <span className="text-gray-900 text-sm">Afifa Siddiqua &lt;afifasiddiqua24@gmail.com&gt;</span>
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-red-600 mb-3 text-sm font-medium">Subject</label>
          <Input
            type="text"
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="border-gray-200 border-l-4 border-l-red-600 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:border-red-500 focus:ring-red-500 transition-colors"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-yellow-600 mb-3 text-sm font-medium">Message</label>
          <Textarea
            placeholder="Hi Afifa, I'd like to discuss a potential collaboration..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[280px] border-gray-200 border-l-4 border-l-yellow-600 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:border-yellow-500 focus:ring-yellow-500 resize-none transition-colors"
            required
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <Button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full gap-2 shadow-sm hover:shadow-md transition-all"
          >
            Send
            <Send className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2">
            <button 
              type="button"
              className="text-blue-600 hover:bg-blue-50 p-2.5 rounded-full transition-colors"
              title="Text formatting"
              aria-label="Text formatting"
            >
              <Type className="w-5 h-5" />
            </button>
            <button 
              type="button"
              className="text-red-600 hover:bg-red-50 p-2.5 rounded-full transition-colors"
              title="Attach files"
              aria-label="Attach files"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button 
              type="button"
              className="text-green-600 hover:bg-green-50 p-2.5 rounded-full transition-colors"
              title="Insert image"
              aria-label="Insert image"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <SubNav />
      
      <main className="flex-1 px-4 md:px-[180px] py-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <ContactCard />
            
            {/* Additional Info Card */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-gray-900 font-semibold mb-4">People also search for</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-700 hover:text-blue-600 hover:underline text-sm">
                  Software Development
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600 hover:underline text-sm">
                  Web Applications
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600 hover:underline text-sm">
                  Frontend Engineering
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600 hover:underline text-sm">
                  Full Stack Developer
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}