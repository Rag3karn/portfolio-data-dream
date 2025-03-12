
import { useState } from "react";
import { Mail, MessageSquare, SendHorizontal, Linkedin, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-2 animate-fade-in">
          <Mail className="h-5 w-5 text-blue-600" />
          <span className="section-tag">Get in Touch</span>
        </div>
        <h2 className="section-heading animate-fade-in">Contact Me</h2>
        <p className="section-subheading animate-fade-in">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <SendHorizontal size={24} />
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-medium transition-all duration-300",
                    isSubmitting
                      ? "bg-blue-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start">
                  <div className="bg-slate-200 p-3 rounded-lg text-slate-700 mr-4">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-1">Let's Discuss</h4>
                    <p className="text-slate-600 mb-3">
                      Whether you have a project in mind or just want to chat about data science, I'm always open to conversations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                <h4 className="text-lg font-medium text-slate-900 mb-3">Social Profiles</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="#"
                    className="inline-flex items-center px-4 py-2.5 bg-white text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <Linkedin size={18} className="mr-2 text-blue-700" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/karngupta2/"
                    className="inline-flex items-center px-4 py-2.5 bg-white text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                  <a 
                    href="https://github.com/Rag3karn"
                    className="inline-flex items-center px-4 py-2.5 bg-white text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <Twitter size={18} className="mr-2 text-blue-400" />
                    Twitter
                  </a>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <h4 className="text-lg font-medium mb-3">Open to Opportunities</h4>
                <p className="mb-4 text-blue-50">
                  Currently seeking challenging opportunities in data science to apply my skills and expand my expertise.
                </p>
                <a
                  href="mailto:example@email.com"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-medium transition-colors hover:bg-blue-50"
                >
                  <Mail size={16} className="mr-2" />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
