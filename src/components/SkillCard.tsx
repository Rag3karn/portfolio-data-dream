
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  description: string;
  variant?: "primary" | "secondary" | "tertiary";
  animationDelay?: number;
}

const SkillCard = ({
  name,
  icon,
  proficiency,
  description,
  variant = "primary",
  animationDelay = 0,
}: SkillCardProps) => {
  const variants = {
    primary: "bg-emerald-50 border-emerald-100",
    secondary: "bg-slate-50 border-slate-100",
    tertiary: "bg-white border-slate-200",
  };

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) - 0.5;
    const y = ((clientY - rect.top) / rect.height) - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
        variants[variant],
        isHovered && "shadow-lg"
      )}
      style={{ 
        animationDelay: `${animationDelay}ms`,
        transform: isHovered ? `perspective(1000px) rotateX(${mousePosition.y * -7}deg) rotateY(${mousePosition.x * 7}deg) translateZ(10px)` : 'perspective(1000px)',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4" style={{ transform: 'translateZ(15px)' }}>
        <div className={cn(
          "p-2 rounded-lg mr-3 transition-all duration-300",
          variant === "primary" ? "bg-emerald-100 text-emerald-600" :
          variant === "secondary" ? "bg-slate-200 text-slate-700" :
          "bg-emerald-50 text-emerald-600",
          isHovered && (variant === "primary" ? "bg-emerald-200" : variant === "secondary" ? "bg-slate-300" : "bg-emerald-100")
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      </div>
      
      <p className="text-slate-600 text-sm mb-4" style={{ transform: 'translateZ(10px)' }}>{description}</p>
      
      <div className="space-y-2" style={{ transform: 'translateZ(5px)' }}>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-500">Proficiency</span>
          <span className="text-xs font-medium text-slate-700">{proficiency}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div 
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              variant === "primary" ? "bg-emerald-500" :
              variant === "secondary" ? "bg-slate-700" :
              "bg-emerald-400"
            )}
            style={{ 
              width: isHovered ? `${proficiency}%` : '0%',
              boxShadow: isHovered ? '0 0 10px rgba(16, 185, 129, 0.5)' : 'none'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
