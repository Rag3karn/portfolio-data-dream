
import SkillCard from "./SkillCard";
import { 
  Code, Database, BarChart3, BrainCircuit, LineChart, FlaskConical, Cloud, Terminal
} from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    {
      name: "Python",
      icon: <Code size={20} />,
      proficiency: 75,
      description: "Proficient in Python programming for machine learning and data analysis, including frameworks like NumPy, Pandas, and PyTorch.",
      variant: "primary",
    },
    {
      name: "SQL & Databases",
      icon: <Database size={20} />,
      proficiency: 60,
      description: "Experience with MySQL, Docker, MongoDB for data storage and management.",
      variant: "primary",
    },
    {
      name: "APIs & DevOps",
      icon: <Cloud size={20} />,
      proficiency: 75,
      description: "Skilled in REST APIs, Flask, FastAPI, and Docker containerization.",
      variant: "primary",
    },
  ];

  const dataSkills = [
    {
      name: "Machine Learning",
      icon: <BrainCircuit size={20} />,
      proficiency: 90,
      description: "Expertise in machine learning algorithms, model training, and deployment.",
      variant: "secondary",
    },
    {
      name: "Data Analysis",
      icon: <BarChart3 size={20} />,
      proficiency: 85,
      description: "Strong background in data analysis, preprocessing, and statistical modeling.",
      variant: "secondary",
    },
    {
      name: "Data Visualization",
      icon: <LineChart size={20} />,
      proficiency: 85,
      description: "Proficient in creating insightful visualizations and dashboards.",
      variant: "secondary",
    },
  ];

  const toolsSkills = [
    {
      name: "Deep Learning",
      icon: <Terminal size={20} />,
      proficiency: 85,
      description: "Experience with NLP, TensorFlow, and advanced machine learning models.",
      variant: "tertiary",
    },
    {
      name: "Development Tools",
      icon: <FlaskConical size={20} />,
      proficiency: 80,
      description: "Proficient with Git, Jupyter, DVC, and development workflows.",
      variant: "tertiary",
    },
    {
      name: "Cloud Services",
      icon: <Cloud size={20} />,
      proficiency: 40,
      description: "Familiar with AWS and cloud-based machine learning deployments.",
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
