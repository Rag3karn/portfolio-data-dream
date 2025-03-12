
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Portfolio</h3>
            <p className="text-slate-300 mb-4">
              Data science enthusiast passionate about turning data into actionable insights.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-blue-400" />
              <span>and data</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="mailto:karnguptaprivate123@gmail.com" className="hover:text-white transition-colors">
                  karnguptaprivate123@gmail.com
                </a>
              </li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-800 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Data Science Portfolio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
