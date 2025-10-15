import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { DomainBadge } from "@/components/DomainBadge";
import { SalaryRange } from "@/components/SalaryRange";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, TrendingUp, Target } from "lucide-react";
import { Language } from "@/data/languagesData";

interface LanguageLayoutProps {
  language: Language;
}

export const LanguageLayout = ({ language }: LanguageLayoutProps) => {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className={`${language.gradient} text-white py-16 md:py-24`}>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              {language.domains.map((domain) => (
                <DomainBadge key={domain} domain={domain} />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{language.name}</h1>
            <p className="text-xl md:text-2xl text-white/90">{language.tagline}</p>
          </div>
        </div>
      </section>

      <div className="container px-4 -mt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview Card */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language.overview}
            </p>
          </Card>

          {/* Applications */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Key Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {language.applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{app}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Advantages */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Key Advantages
            </h2>
            <div className="space-y-3">
              {language.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
                  <div className={`w-8 h-8 rounded-full ${language.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Salary Range */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-bold mb-6">2026 US Salary Range</h2>
            <SalaryRange
              min={language.salaryRange.min}
              max={language.salaryRange.max}
              gradient={language.gradient}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Salary ranges vary based on experience, location, company size, and specialization
            </p>
          </Card>

          {/* Career Roles */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-6">Popular Career Roles</h2>
            <div className="flex flex-wrap gap-3">
              {language.careerRoles.map((role, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {role}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Future Trends */}
          <Card className="p-6 md:p-8 shadow-strong animate-scale-in" style={{ animationDelay: "500ms" }}>
            <h2 className="text-2xl font-bold mb-6">Future Outlook & Trends</h2>
            <div className="space-y-4">
              {language.futureTrends.map((trend, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{trend}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
