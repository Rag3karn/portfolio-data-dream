import ProjectCard from "./ProjectCard";
import { Lightbulb, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn for a telecom company, improving retention strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Scikit-learn", "Pandas", "Classification", "Data Visualization"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Market Basket Analysis",
      description:
        "Performed association rule mining on retail transaction data to identify product bundling opportunities.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      tags: ["R", "Association Rules", "Data Mining", "Business Intelligence"],
      links: {
        github: "#",
      },
    },
    {
      title: "Sentiment Analysis Dashboard",
      description:
        "Created an interactive dashboard for real-time sentiment analysis of customer feedback data.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      tags: ["NLP", "Python", "Tableau", "Text Mining", "Dashboard"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-2 animate-fade-in">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          <span className="section-tag">Featured Work</span>
        </div>
        <h2 className="section-heading animate-fade-in">Data Science Projects</h2>
        <p className="section-subheading animate-fade-in">
          A selection of my data science projects showcasing my technical skills and problem-solving abilities.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              links={project.links}
              animationDelay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
