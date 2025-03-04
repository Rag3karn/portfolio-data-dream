
import SkillCard from "./SkillCard";
import { 
  Code, Database, BarChart3, BrainCircuit, LineChart, FlaskConical, PenTool, BookOpen
} from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    {
      name: "Python",
      icon: <Code size={20} />,
      proficiency: 85,
      description: "Proficient in Python programming, particularly for data analysis and machine learning applications.",
      variant: "primary",
    },
    {
      name: "R",
      icon: <Code size={20} />,
      proficiency: 75,
      description: "Strong knowledge of R for statistical analysis and data visualization.",
      variant: "primary",
    },
    {
      name: "SQL",
      icon: <Database size={20} />,
      proficiency: 80,
      description: "Experienced in writing complex queries and managing relational databases.",
      variant: "primary",
    },
  ];

  const dataSkills = [
    {
      name: "Data Analysis",
      icon: <BarChart3 size={20} />,
      proficiency: 90,
      description: "Expert in exploratory data analysis, statistical analysis, and hypothesis testing.",
      variant: "secondary",
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuit size={20} />,
      proficiency: 75,
      description: "Knowledgeable in various ML algorithms, model training, and evaluation techniques.",
      variant: "secondary",
    },
    {
      name: "Data Visualization",
      icon: <LineChart size={20} />,
      proficiency: 85,
      description: "Skilled in creating clear, informative visualizations using various tools and libraries.",
      variant: "secondary",
    },
  ];

  const toolsSkills = [
    {
      name: "Pandas & NumPy",
      icon: <FlaskConical size={20} />,
      proficiency: 85,
      description: "Proficient with Python data manipulation libraries for efficient data processing.",
      variant: "tertiary",
    },
    {
      name: "Tableau",
      icon: <PenTool size={20} />,
      proficiency: 70,
      description: "Experienced in creating interactive dashboards and visual analytics.",
      variant: "tertiary",
    },
    {
      name: "Scikit-learn",
      icon: <BookOpen size={20} />,
      proficiency: 75,
      description: "Familiar with implementing machine learning algorithms using Scikit-learn.",
      variant: "tertiary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <span className="section-tag animate-fade-in">Technical Abilities</span>
        <h2 className="section-heading animate-fade-in">Skills & Expertise</h2>
        <p className="section-subheading animate-fade-in">
          My technical toolkit encompasses programming languages, data analysis techniques, and specialized tools.
        </p>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 animate-fade-in">Programming Languages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  description={skill.description}
                  variant={skill.variant as "primary" | "secondary" | "tertiary"}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 animate-fade-in">Data Science & Analytics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  description={skill.description}
                  variant={skill.variant as "primary" | "secondary" | "tertiary"}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 animate-fade-in">Tools & Frameworks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                  description={skill.description}
                  variant={skill.variant as "primary" | "secondary" | "tertiary"}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
