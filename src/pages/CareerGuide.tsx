import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Globe, Smartphone, Gamepad2, Server, Code2, ArrowRight } from "lucide-react";

const careerPaths = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Build intelligent systems, work with data science, and create ML models",
    languages: ["Python", "R"],
    gradient: "bg-gradient-ai",
    roles: ["Data Scientist", "ML Engineer", "AI Researcher"],
    link: "/python"
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Create modern web applications, from frontend to backend",
    languages: ["JavaScript", "TypeScript", "PHP", "Ruby"],
    gradient: "bg-gradient-web",
    roles: ["Frontend Dev", "Full-Stack Dev", "Web Engineer"],
    link: "/javascript"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Build native mobile apps for iOS and Android platforms",
    languages: ["Swift", "Java", "Kotlin"],
    gradient: "bg-gradient-mobile",
    roles: ["iOS Developer", "Android Developer", "Mobile Engineer"],
    link: "/swift"
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    description: "Create immersive gaming experiences and interactive entertainment",
    languages: ["C++", "C#", "Unity"],
    gradient: "bg-primary",
    roles: ["Game Developer", "Unity Developer", "Engine Programmer"],
    link: "/csharp"
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    description: "Build scalable server infrastructure and cloud-native applications",
    languages: ["Go", "Java", "Python", "Node.js"],
    gradient: "bg-gradient-backend",
    roles: ["Backend Engineer", "DevOps Engineer", "Cloud Architect"],
    link: "/go"
  },
  {
    title: "Systems Programming",
    icon: Code2,
    description: "Develop operating systems, embedded systems, and high-performance software",
    languages: ["C++", "Rust", "Go"],
    gradient: "bg-gradient-system",
    roles: ["Systems Engineer", "Embedded Developer", "Performance Engineer"],
    link: "/cpp"
  }
];

const CareerGuide = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">Choose Your Career Path</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Match your interests with the right programming language and kickstart your tech career
            </p>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="container px-4 -mt-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {careerPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Card 
                key={path.title}
                className="p-6 md:p-8 shadow-strong hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`w-16 h-16 rounded-xl ${path.gradient} flex items-center justify-center shadow-medium flex-shrink-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                      <p className="text-muted-foreground">{path.description}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Recommended Languages:</p>
                      <div className="flex flex-wrap gap-2">
                        {path.languages.map((lang) => (
                          <span key={lang} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Common Roles:</p>
                      <div className="flex flex-wrap gap-2">
                        {path.roles.map((role) => (
                          <span key={role} className="px-3 py-1 border rounded-full text-sm">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to={path.link}>
                      <Button className="group">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How to Choose?</h2>
              <p className="text-lg text-muted-foreground">
                Consider these factors when selecting your programming language
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Your Interests</h3>
                <p className="text-muted-foreground">
                  Love data and analytics? Choose Python. Passionate about design and user interfaces? JavaScript/TypeScript is your friend.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Job Market</h3>
                <p className="text-muted-foreground">
                  Research demand in your area. Web development and cloud roles are consistently in high demand across all regions.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Learning Curve</h3>
                <p className="text-muted-foreground">
                  Python and JavaScript are beginner-friendly. C++ and system languages require more foundational knowledge.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Long-term Goals</h3>
                <p className="text-muted-foreground">
                  Think about where you want to be in 5 years. Some languages open more doors to specific career paths.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-primary text-primary-foreground text-center space-y-4">
              <h3 className="text-2xl font-bold">Pro Tip</h3>
              <p className="text-lg">
                Your first language isn't your only language. Most developers know 3-5 languages. Start with one that matches your immediate goals, then expand your skills over time.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuide;
