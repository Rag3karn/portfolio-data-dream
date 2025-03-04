
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 space-y-6">
            <span className="section-tag animate-fade-in">Data Science Enthusiast</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight animate-fade-in"
                style={{ animationDelay: "100ms" }}>
              Turning Data <span className="text-blue-600">into Insights</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl animate-fade-in" style={{ animationDelay: "200ms" }}>
              Passionate about uncovering patterns and extracting meaningful insights from complex datasets. 
              Currently exploring the intersection of data science and real-world applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 font-medium"
              >
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="px-8 py-3 bg-white text-slate-800 rounded-lg shadow-md border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 font-medium"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-100 p-3 mx-auto animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-100 via-blue-50 to-white shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-1/2 h-1/2 text-blue-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "rounded-md animate-pulse-slow",
                        i % 3 === 0 ? "bg-blue-200" : 
                        i % 3 === 1 ? "bg-blue-100" : "bg-blue-50"
                      )}
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-lg p-3 rotate-6 animate-float">
              <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-2 w-28 h-28 bg-white rounded-xl shadow-lg p-3 -rotate-12 animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-14 h-14 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
