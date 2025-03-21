
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
  const [elementPosition, setElementPosition] = useState({ top: 0, left: 0 });
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref) return;
    
    const rect = ref.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / elementSize.width) - 0.5;
    const y = ((e.clientY - rect.top) / elementSize.height) - 0.5;
    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setElementSize({ width: rect.width, height: rect.height });
      setElementPosition({ top: rect.top, left: rect.left });
    }
  }, [ref]);

  return (
    <div 
      ref={setRef}
      className={cn(
        "rounded-xl p-6 border transition-all duration-300 animate-fade-in",
        isActive
          ? "border-emerald-200 bg-emerald-50 shadow-lg shadow-emerald-100/50"
          : "border-slate-200 bg-white hover:shadow-md"
      )}
      style={{ 
        animationDelay: `${animationDelay}ms`,
        transform: isHovered ? `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'transform 0.3s ease-out',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4" style={{ transform: 'translateZ(10px)' }}>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-emerald-600 font-medium">{company}</p>
        </div>
        {isActive && (
          <span 
            className="mt-2 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
            style={{ transform: 'translateZ(15px)' }}
          >
            Current
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 mb-4 text-sm text-slate-500" style={{ transform: 'translateZ(8px)' }}>
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>

      <div className="mt-4 space-y-2" style={{ transform: 'translateZ(5px)' }}>
        {description.map((item, index) => (
          <p key={index} className="text-slate-600 flex items-start">
            <span 
              className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 mr-2"
              style={{ transform: 'translateZ(2px)' }}
            ></span>
            {item}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2" style={{ transform: 'translateZ(12px)' }}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
              isHovered ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700",
              "transition-colors duration-300"
            )}
            style={{ 
              transform: `translateZ(${10 + index % 3 * 2}px)`,
              transition: 'all 0.3s ease-out'
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {websiteUrl && (
        <div className="mt-6" style={{ transform: 'translateZ(20px)' }}>
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
          >
            <Button 
              variant="outline" 
              className="gap-2 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-500"
              style={{ 
                boxShadow: isHovered ? '0 5px 15px rgba(16, 185, 129, 0.15)' : 'none',
                transform: isHovered ? 'translateY(-2px)' : 'none',
              }}
            >
              <ExternalLink size={16} />
              View Experience Website
            </Button>
          </a>
        </div>
      )}

      {isComingSoon && (
        <div className="mt-6" style={{ transform: 'translateZ(20px)' }}>
          <Button 
            variant="outline" 
            className="gap-2 opacity-70 cursor-not-allowed border-slate-200" 
            disabled
            style={{ 
              boxShadow: isHovered ? '0 5px 15px rgba(203, 213, 225, 0.15)' : 'none'
            }}
          >
            Experience website coming soon
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
