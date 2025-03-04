
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "TechCorp Analytics",
      location: "San Francisco, CA",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Developed data visualization dashboards using Python and Tableau to track key metrics, improving executive decision-making efficiency by 30%.",
        "Implemented machine learning models to predict customer churn with 85% accuracy, leading to targeted retention strategies.",
        "Collaborated with cross-functional teams to gather requirements and translate business problems into data-driven solutions.",
        "Automated data cleaning and preprocessing workflows, reducing data preparation time by 40%."
      ],
      skills: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL", "Statistical Analysis"],
      isActive: false,
    },
    {
      title: "Research Data Analyst Intern",
      company: "DataVision Institute",
      location: "Boston, MA",
      period: "Jan 2023 - Apr 2023",
      description: [
        "Conducted exploratory data analysis on large datasets to identify trends and patterns in consumer behavior.",
        "Assisted in the development of predictive models using regression and classification techniques.",
        "Created comprehensive reports and presentations to communicate findings to non-technical stakeholders.",
        "Participated in weekly research meetings to discuss methodology and results."
      ],
      skills: ["R", "Data Analysis", "Statistical Modeling", "Data Visualization", "Research Methods"],
      isActive: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-2 animate-fade-in">
          <Briefcase className="h-5 w-5 text-blue-600" />
          <span className="section-tag">Professional Journey</span>
        </div>
        <h2 className="section-heading animate-fade-in">Experience & Internships</h2>
        <p className="section-subheading animate-fade-in">
          My professional journey in the data science field through meaningful internship experiences.
        </p>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
              isActive={exp.isActive}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
