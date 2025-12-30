import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Search } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header - Google Search Style */}
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
            value="404 - Page Not Found" 
            readOnly
            className="w-full h-10 pl-4 pr-12 rounded-full border border-input bg-secondary/30 hover:bg-secondary/50 hover:shadow-sm focus:outline-none focus:shadow-md transition-all"
          />
          <Search className="absolute right-4 top-2.5 w-5 h-5 text-google-blue" />
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-google-blue text-white flex items-center justify-center font-bold">A</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg border-border shadow-sm">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-google-red/20 rounded-full animate-pulse" />
                <AlertCircle className="relative h-16 w-16 text-google-red" />
              </div>
            </div>

            <h1 className="text-6xl font-normal text-foreground mb-2">404</h1>

            <h2 className="text-2xl font-normal text-foreground mb-4">
              Page Not Found
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
              Sorry, the page you are looking for doesn't exist.
              <br />
              It may have been moved or deleted.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleGoHome}
                className="bg-google-blue hover:bg-google-blue/90 text-white rounded-full px-6 gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
