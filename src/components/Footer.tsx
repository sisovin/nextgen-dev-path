import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const languages = [
  { name: "Home", path: "/" },
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

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-950 text-gray-100">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-lg text-white">Top Languages 2026</span>
            </div>
            <p className="text-sm text-gray-400">
              Your comprehensive guide to the top programming languages shaping the future of technology in 2026.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-white hover:bg-gray-800">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Languages Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Languages</h3>
            <ul className="space-y-2">
              {languages.slice(0, 5).map((lang) => (
                <li key={lang.path}>
                  <Link
                    to={lang.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {lang.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Languages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">More Languages</h3>
            <ul className="space-y-2">
              {languages.slice(5).map((lang) => (
                <li key={lang.path}>
                  <Link
                    to={lang.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {lang.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Get the latest insights on programming languages and career trends.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-9 bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
              <Button size="sm" className="shrink-0 bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <Link to="/career-guide">
              <Button variant="link" className="h-auto p-0 text-sm text-blue-400 hover:text-blue-300">
                View Career Guide →
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Top Languages 2026. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
