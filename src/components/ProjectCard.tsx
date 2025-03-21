
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
  animationDelay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  links,
  animationDelay = 0,
}: ProjectCardProps) => {
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
      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ 
        animationDelay: `${animationDelay}ms`,
        transform: isHovered ? `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)` : 'perspective(1000px)',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100" style={{ transform: 'translateZ(10px)' }}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
          style={{ 
            transform: isHovered ? `scale(1.05) translateY(${mousePosition.y * -10}px) translateX(${mousePosition.x * -10}px)` : 'scale(1)',
          }}
        />
      </div>
      
      <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-300",
                index % 3 === 0 ? "bg-emerald-100 text-emerald-800" :
                index % 3 === 1 ? "bg-slate-100 text-slate-800" :
                "bg-teal-50 text-teal-600"
              )}
              style={{ 
                transform: isHovered ? `translateZ(${25 + index * 2}px)` : 'translateZ(0)',
                boxShadow: isHovered ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3" style={{ transform: 'translateZ(30px)' }}>
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center text-slate-700 hover:text-slate-900 text-sm font-medium transition-all duration-300",
                isHovered && "transform translate-y-[-2px]"
              )}
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
          
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-all duration-300",
                isHovered && "transform translate-y-[-2px]"
              )}
            >
              <ArrowUpRight size={16} className="mr-1" />
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
