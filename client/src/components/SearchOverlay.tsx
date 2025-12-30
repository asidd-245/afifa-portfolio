import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, X, Sparkles, User, FolderGit2, Briefcase, Mail } from "lucide-react";
import { SearchResult } from "@/components/SearchResult";
import { searchWithGemini } from "@/lib/gemini";
import type { GeminiSearchResponse } from "@shared/types";
import { Spinner } from "@/components/ui/spinner";

interface SearchOverlayProps {
  open: boolean;
  query: string;
  onClose: () => void;
}

export function SearchOverlay({ open, query, onClose }: SearchOverlayProps) {
  const [searchData, setSearchData] = useState<GeminiSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && query) {
      setLoading(true);
      setSearchData(null);
      
      searchWithGemini(query)
        .then((data) => {
          setSearchData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Search error:", error);
          setLoading(false);
        });
    }
  }, [open, query]);

  const getIconForPage = (page: string) => {
    switch (page) {
      case 'about':
        return <User className="w-4 h-4 text-google-blue" />;
      case 'projects':
        return <FolderGit2 className="w-4 h-4 text-google-red" />;
      case 'experience':
        return <Briefcase className="w-4 h-4 text-google-yellow" />;
      case 'contact':
        return <Mail className="w-4 h-4 text-google-green" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] h-[80vh] m-0 p-0 bg-background border border-border rounded-xl overflow-hidden flex flex-col shadow-2xl">
        <div className="h-full bg-background flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex-shrink-0 bg-background z-50 border-b border-border/40 px-4 md:px-6 py-3 flex items-center gap-3 md:gap-6">
            <div className="text-xl md:text-2xl font-bold tracking-tighter select-none cursor-pointer flex-shrink-0" onClick={onClose}>
              <span className="text-google-blue">a</span>
              <span className="text-google-red">f</span>
              <span className="text-google-yellow">o</span>
              <span className="text-google-blue">o</span>
              <span className="text-google-green">f</span>
              <span className="text-google-red">l</span>
              <span className="text-google-blue inline-block transform rotate-12">e</span>
            </div>
            
            <div className="flex-1 max-w-2xl relative min-w-0">
              <input 
                type="text" 
                value={query}
                readOnly
                className="w-full h-10 pl-4 pr-12 rounded-full border border-input bg-background hover:bg-secondary/50 hover:shadow-sm focus:outline-none focus:shadow-md transition-all text-sm truncate"
              />
              <Search className="absolute right-4 top-2.5 w-5 h-5 text-google-blue" />
            </div>
            
            <button 
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto px-6 md:px-12 py-6 w-full">
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Spinner className="w-8 h-8 mb-4" />
                <p className="text-muted-foreground">Searching afoofle...</p>
              </div>
            )}

            {!loading && searchData && (
              <>
                <div className="text-sm text-muted-foreground mb-6">
                  About {searchData.results.length} results (0.{Math.floor(Math.random() * 90 + 10)} seconds)
                </div>

                {/* AI Overview Card */}
                <div className="max-w-[600px] mb-8 p-5 rounded-xl border border-border/50 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-pink-50/80 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/30 shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">AI Overview</span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[15px] leading-[1.6] text-foreground/95 whitespace-pre-line">
                      {searchData.aiOverview}
                    </p>
                    
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-[11px] text-muted-foreground italic">
                        Generative AI is experimental. Info quality may vary.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="space-y-2">
                  {searchData.results.map((result, index) => (
                    <SearchResult
                      key={index}
                      title={result.title}
                      url={result.url}
                      description={result.description}
                      tags={result.tags}
                      icon={getIconForPage(result.page)}
                      image={result.image}
                      href={`/${result.page}`}
                    />
                  ))}
                </div>

                {/* Pagination Footer */}
                <div className="mt-12 max-w-[600px] flex justify-center">
                  <div className="flex items-end gap-1 select-none">
                    <span className="text-google-blue text-4xl font-bold tracking-tighter">a</span>
                    <div className="flex">
                      <span className="text-google-red text-4xl font-bold tracking-tighter">f</span>
                      <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
                      <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
                      <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
                      <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
                      <span className="text-google-yellow text-4xl font-bold tracking-tighter">o</span>
                    </div>
                    <span className="text-google-blue text-4xl font-bold tracking-tighter">f</span>
                    <span className="text-google-green text-4xl font-bold tracking-tighter">l</span>
                    <span className="text-google-red text-4xl font-bold tracking-tighter">e</span>
                    <span className="text-google-blue text-4xl font-bold tracking-tighter ml-2">&gt;</span>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
}

