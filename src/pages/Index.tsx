import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DomainBadge } from "@/components/DomainBadge";
import { languagesData } from "@/data/languagesData";
import { ArrowRight, TrendingUp, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-code.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Programming languages hero" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative container px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Top 10 Programming Languages to Learn in 2026
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your complete guide to choosing the right programming language for your career goals.
              From AI development to mobile apps, discover which language matches your ambitions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/python">
                <Button size="lg" variant="secondary" className="group">
                  Explore Languages
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/career-guide">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Career Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">10</h3>
              <p className="text-muted-foreground">In-Demand Languages</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">$65K-$180K</h3>
              <p className="text-muted-foreground">Salary Range (US)</p>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">6</h3>
              <p className="text-muted-foreground">Career Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Explore Each Language</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any language to dive deep into its applications, advantages, salary expectations, and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {languagesData.map((lang, index) => (
              <Link key={lang.path} to={lang.path}>
                <Card 
                  className="p-6 h-full hover:shadow-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg ${lang.gradient} flex items-center justify-center shadow-medium`}>
                        <span className="text-white text-2xl font-bold">
                          {lang.name.charAt(0)}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-1">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.tagline}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {lang.domains.slice(0, 3).map((domain) => (
                        <DomainBadge key={domain} domain={domain} />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {lang.overview}
                    </p>

                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Salary Range</span>
                        <span className="font-semibold">
                          ${(lang.salaryRange.min / 1000).toFixed(0)}K - ${(lang.salaryRange.max / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Not Sure Which Language to Choose?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our interactive career guide helps you match languages with your goals—whether you're interested in AI, web development, mobile apps, or game development.
            </p>
            <Link to="/career-guide">
              <Button size="lg" className="group">
                View Career Guide
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
