import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const languages = [
  { name: "Python", path: "/python" },
  { name: "JavaScript", path: "/javascript" },
  { name: "TypeScript", path: "/typescript" },
  { name: "Java", path: "/java" },
  { name: "C#", path: "/csharp" },
  { name: "Go", path: "/go" },
  { name: "Ruby", path: "/ruby" },
  { name: "Swift", path: "/swift" },
  { name: "C++", path: "/cpp" },
  { name: "PHP", path: "/php" },
];

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">Top Languages 2026</span>
          <span className="sm:hidden">TL 2026</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {languages.map((lang) => (
            <Link key={lang.path} to={lang.path}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm",
                  location.pathname === lang.path && "bg-muted font-medium"
                )}
              >
                {lang.name}
              </Button>
            </Link>
          ))}
          <Link to="/career-guide">
            <Button variant="default" size="sm" className="ml-2">
              Career Guide
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background p-4 animate-slide-in">
          <div className="flex flex-col gap-2">
            {languages.map((lang) => (
              <Link key={lang.path} to={lang.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    location.pathname === lang.path && "bg-muted font-medium"
                  )}
                >
                  {lang.name}
                </Button>
              </Link>
            ))}
            <Link to="/career-guide" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full">
                Career Guide
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
