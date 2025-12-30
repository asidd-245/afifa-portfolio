import { FolderGit2, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "wouter";

interface SearchResultProps {
  title: string;
  url: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
  image?: string;
  href?: string;
}

export const SearchResult = ({ title, url, description, tags, icon, image, href }: SearchResultProps) => (
  <div className="max-w-[600px] mb-6 group">
    <div className="flex items-center gap-2.5 mb-1.5">
      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center border border-border flex-shrink-0">
        {icon || <FolderGit2 className="w-4 h-4 text-foreground" />}
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[13px] text-foreground font-normal">Afifa's Portfolio</span>
        <span className="text-[12px] text-muted-foreground truncate">{url}</span>
      </div>
      <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer flex-shrink-0" />
    </div>
    
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        {href ? (
          <Link href={href}>
            <a className="block w-fit">
              <h3 className="text-xl text-google-blue font-normal mb-1 group-hover:underline decoration-google-blue cursor-pointer break-words">{title}</h3>
            </a>
          </Link>
        ) : (
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block w-fit">
            <h3 className="text-xl text-google-blue font-normal mb-1 group-hover:underline decoration-google-blue cursor-pointer break-words">{title}</h3>
          </a>
        )}
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
    
    <p className="text-[14px] text-foreground/85 leading-[1.6] mb-3">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-1.5 mt-2">
      {tags.map((tag, i) => (
        <Badge key={i} variant="secondary" className="rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-secondary hover:bg-secondary/80 border border-border/50">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

