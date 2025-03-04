
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";

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
  return (
    <div 
      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                index % 3 === 0 ? "bg-blue-100 text-blue-800" :
                index % 3 === 1 ? "bg-slate-100 text-slate-800" :
                "bg-blue-50 text-blue-600"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 text-sm font-medium"
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
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
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
