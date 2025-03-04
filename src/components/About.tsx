
import { ArrowRight, Lightbulb, BookOpen, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <span className="section-tag animate-fade-in">About Me</span>
        <h2 className="section-heading animate-fade-in">Data Enthusiast with a Vision</h2>
        <p className="section-subheading animate-fade-in">
          Passionate about uncovering patterns and extracting meaningful insights from complex datasets.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">My Background</h3>
            <p className="text-slate-600 mb-6">
              As a data science enthusiast, I've been on a journey to explore the fascinating world of data analysis, 
              machine learning, and statistical modeling. My academic foundation and internship experiences have 
              equipped me with the skills to transform raw data into actionable insights.
            </p>
            <p className="text-slate-600">
              I'm constantly learning and adapting to new technologies and methodologies in the ever-evolving 
              field of data science. My goal is to leverage data to solve complex problems and drive informed 
              decision-making.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Problem Solver</h3>
                  <p className="text-slate-600">
                    I approach complex data problems with creativity and analytical rigor, breaking them down into manageable components.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Continuous Learner</h3>
                  <p className="text-slate-600">
                    I'm committed to staying at the forefront of data science by continuously learning new techniques and tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Analytical Thinker</h3>
                  <p className="text-slate-600">
                    I enjoy diving deep into data, identifying patterns, and extracting insights that drive value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#experience" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Explore My Experience
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
