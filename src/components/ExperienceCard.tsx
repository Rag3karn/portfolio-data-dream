
import { CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  isActive?: boolean;
  animationDelay?: number;
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
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-6 border transition-all duration-300 animate-fade-in",
        isActive
          ? "border-blue-200 bg-blue-50 shadow-lg shadow-blue-100/50"
          : "border-slate-200 bg-white hover:shadow-md"
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        {isActive && (
          <span className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
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
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
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
    </div>
  );
};

export default ExperienceCard;
