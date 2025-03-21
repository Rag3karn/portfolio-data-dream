
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* 3D Moving Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl animate-pulse-glow"
          style={{ 
            transform: isLoaded ? `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0)` : '',
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
        <div 
          className="absolute left-10 bottom-10 w-64 h-64 rounded-full bg-blue-50/60 blur-3xl"
          style={{ 
            transform: isLoaded ? `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0)` : '',
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-teal-200/30 blur-3xl"
          style={{ 
            transform: isLoaded ? `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)` : '',
            transition: 'transform 0.4s ease-out'
          }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 space-y-6">
            <span 
              className="section-tag animate-fade-in"
              style={{ 
                transform: isLoaded ? `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0)` : '',
                transition: 'transform 0.5s ease-out' 
              }}
            >
              Data Science Enthusiast
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight animate-fade-in"
              style={{ 
                animationDelay: "100ms",
                transform: isLoaded ? `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 5}px, 0)` : '',
                transition: 'transform 0.5s ease-out'
              }}
            >
              Turning Data <span className="text-emerald-600 relative">
                Insights
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400/60 rounded-full"></span>
              </span>
            </h1>
            <p 
              className="text-xl text-slate-600 max-w-2xl animate-fade-in" 
              style={{ 
                animationDelay: "200ms",
                transform: isLoaded ? `translate3d(${mousePosition.x * 7.5}px, ${mousePosition.y * 5}px, 0)` : '',
                transition: 'transform 0.5s ease-out'
              }}
            >
              Passionate about uncovering patterns and extracting meaningful insights from complex datasets. 
              Currently exploring the intersection of data science and real-world applications.
            </p>
            <div 
              className="flex flex-wrap gap-4 pt-4 animate-fade-in" 
              style={{ 
                animationDelay: "300ms",
                transform: isLoaded ? `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0)` : '',
                transition: 'transform 0.5s ease-out'
              }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:bg-emerald-700 transition-all duration-300 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 w-0 bg-emerald-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a 
                href="#experience" 
                className="px-8 py-3 bg-white text-slate-800 rounded-lg shadow-md border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">View Experience</span>
                <span className="absolute inset-0 w-0 bg-slate-100 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div 
            className="lg:w-2/5 relative"
            style={{ 
              transform: isLoaded ? `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * -10}deg)` : '',
              transition: 'transform 0.5s ease-out',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-emerald-100 p-3 mx-auto animate-float-3d">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-100 via-teal-50 to-white shadow-xl overflow-hidden relative">
                {/* 3D Floating Elements Inside Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-1/2 h-1/2 text-emerald-600 opacity-20 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                
                {/* 3D Grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "rounded-md animate-pulse-slow",
                        i % 3 === 0 ? "bg-emerald-200" : 
                        i % 3 === 1 ? "bg-teal-100" : "bg-cyan-50"
                      )}
                      style={{ 
                        animationDelay: `${i * 200}ms`,
                        transform: `translateZ(${(i % 3) * 5}px)`,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 3D Floating Elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-lg p-3 rotate-6 animate-float-3d"
              style={{ 
                transformStyle: 'preserve-3d', 
                transform: `translateZ(20px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
                transition: 'transform 0.3s ease-out',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              <div className="w-full h-full bg-emerald-50 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-6 -left-2 w-28 h-28 bg-white rounded-xl shadow-lg p-3 -rotate-12 animate-float-3d" 
              style={{ 
                animationDelay: "2s",
                transformStyle: 'preserve-3d', 
                transform: `translateZ(30px) rotateX(${mousePosition.y * -20}deg) rotateY(${mousePosition.x * -20}deg)`,
                transition: 'transform 0.4s ease-out',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}
            >
              <div className="w-full h-full bg-teal-50 rounded-lg flex items-center justify-center">
                <svg className="w-14 h-14 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>

            {/* New floating element */}
            <div 
              className="absolute top-1/2 -right-8 w-20 h-20 bg-white rounded-xl shadow-lg p-3 rotate-12 animate-float-3d" 
              style={{ 
                animationDelay: "1.5s",
                transformStyle: 'preserve-3d', 
                transform: `translateZ(25px) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
                transition: 'transform 0.35s ease-out',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div className="w-full h-full bg-cyan-50 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with 3D Effect */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow hidden md:block"
          style={{ 
            transform: isLoaded ? `translate3d(-50%, 0, 0) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)` : 'translate3d(-50%, 0, 0)',
            transition: 'transform 0.2s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-emerald-300 flex items-start justify-center p-2 glass">
            <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
