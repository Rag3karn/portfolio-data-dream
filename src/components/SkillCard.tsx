
import { cn } from "@/lib/utils";

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
    primary: "bg-blue-50 border-blue-100",
    secondary: "bg-slate-50 border-slate-100",
    tertiary: "bg-white border-slate-200",
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
        variants[variant]
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "p-2 rounded-lg mr-3",
          variant === "primary" ? "bg-blue-100 text-blue-600" :
          variant === "secondary" ? "bg-slate-200 text-slate-700" :
          "bg-blue-50 text-blue-600"
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      </div>
      
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-500">Proficiency</span>
          <span className="text-xs font-medium text-slate-700">{proficiency}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5">
          <div 
            className={cn(
              "h-1.5 rounded-full",
              variant === "primary" ? "bg-blue-500" :
              variant === "secondary" ? "bg-slate-700" :
              "bg-blue-400"
            )}
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
