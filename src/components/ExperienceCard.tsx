
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  isActive?: boolean;
  animationDelay?: number;
  websiteUrl?: string;
  isComingSoon?: boolean;
}

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  skills,
  isActive = false,
  animationDelay = 0,
  websiteUrl,
  isComingSoon = false,
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-6 border transition-all duration-300 animate-fade-in",
        isActive
          ? "border-emerald-200 bg-emerald-50 shadow-lg shadow-emerald-100/50"
          : "border-slate-200 bg-white hover:shadow-md"
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-emerald-600 font-medium">{company}</p>
        </div>
        {isActive && (
          <span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Current
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 mb-4 text-sm text-slate-500">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {description.map((item, index) => (
          <p key={index} className="text-slate-600 flex items-start">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 mr-2"></span>
            {item}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {websiteUrl && (
        <div className="mt-6">
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
          >
            <Button variant="outline" className="gap-2 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
              <ExternalLink size={16} />
              View Experience Website
            </Button>
          </a>
        </div>
      )}

      {isComingSoon && (
        <div className="mt-6">
          <Button variant="outline" className="gap-2 opacity-70 cursor-not-allowed border-slate-200" disabled>
            Experience website coming soon
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
