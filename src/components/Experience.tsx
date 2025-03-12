
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "Augrade",
      location: "Mumbai, MH, India",
      period: "January 2025 - Present",
      description: [
        "Developed data visualization dashboards to track key metrics for construction building projects.",
        "Implemented ML models for project timelines optimization and gap analysis.",
        "Collaborated with cross-functional teams to translate business problems into data-driven solutions.",
        "Contributed to technical gap resolution between finished construction and BIM modeling.",
      ],
      skills: ["Python", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      isActive: true,
    },
    {
      title: "Data Science Intern",
      company: "Innate AI",
      location: "Helsinki, Finland",
      period: "October 2024 - January 2025",
      description: [
        "Contributed to fine-tuning Large Language Models (LLM) and leveraging AI for critical solutions.",
        "Demonstrated strong problem-solving abilities in applying data science knowledge and APIs.",
        "Assisted in testing and fine-tuning benchmark datasets for optimal model performance.",
        "Successfully delivered tasks at a good pace with precision and excellence.",
      ],
      skills: ["LLMs", "AI Development", "Data Science", "Benchmarking"],
      isActive: false,
    },
    {
      title: "Teaching Assistant",
      company: "U&I",
      location: "Nagpur Urban, MH, India",
      period: "April 2022 - August 2024",
      description: [
        "Teaching underprivileged students and helping them with their studies.",
        "Contributing to society by educating the underprivileged and orphan students.",
        "Managing other interns and mentors with the goal to reach the students and create a difference in the society.",
      ],
      skills: ["Teaching", "Mentoring", "Leadership", "Social Impact"],
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
