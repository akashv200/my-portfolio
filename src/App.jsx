import React, { useState } from "react";

const profile = {
  name: "Akash V",
  title: "Software Developer",
  location: "Alappuzha,Kerala, India",
  bio: `I build reliable, maintainable web applications using HTML,CSS,JS and PHP&MySQL. I like C/C++ for systems-level work and enjoy solving algorithmic challenges. Currently focused on web development and backend engineering.`,
  email: "akashak2004ak@gmail.com",
  github: "https://github.com/akashv200",
  linkedin: "https://www.linkedin.com/in/akash-v-97072b26b",
  resume: "/my-portfolio/resume.pdf"
};

const skills = [
  "JavaScript (ES6+)",
  "Linux",
  "PHP & MySQL",
  "C / C++",
  "HTML & CSS / Tailwind",
  "Git & GitHub",
  
];

const projects = [
  {
    title: "College Fest Page",
    desc: "Designed using HTML,CSS,JS and Hosted using GitHub",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://akashv200.github.io/fest/",
  },
  {
    title: "Patient Registration Portal",
    desc: "Combined with EyeCare Website.It contains Email OTP feature",
    tech: ["PHP", "PHPMAILER", "SMTP"],
    link: "https://github.com/akashv200/EYE-CARE-Mini-Project-",
  },
  {
    title: "Eye Care Website",
    desc: "Frontend and backend for an eye care clinic, appointment booking and patient management.NOT HOSTED",
    tech: ["PHP", "MYSQL", "HTML"],
    link: "https://github.com/akashv200/EYE-CARE-Mini-Project-",
  },
];

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false, message: "" });

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ loading: false, success: false, error: true, message: "Please fill in all fields" });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false, message: "" }), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ loading: false, success: false, error: true, message: "Please enter a valid email address" });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false, message: "" }), 3000);
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: "" });

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/mwpzqqee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ 
          loading: false, 
          success: true, 
          error: false, 
          message: "Message sent successfully! I'll get back to you soon." 
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus({ loading: false, success: false, error: false, message: "" }), 5000);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: true, 
        message: "Failed to send message. Please try again or email me directly." 
      });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false, message: "" }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-200">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-base text-gray-400 mt-2">{profile.title} — {profile.location}</p>
          </div>

          <nav className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 transition-all duration-200 border border-slate-700/50">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 transition-all duration-200 border border-slate-700/50">
              LinkedIn
            </a>
            <a href={profile.resume} className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-200">
              Resume
            </a>
          </nav>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-xl">
              <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl shadow-purple-500/30 ring-4 ring-purple-500/20">
     <img 
    src="/my-portfolio/profile.jpg" 
    alt="Akash V" 
    className="w-full h-full object-cover"
  />
</div>
                <h2 className="mt-6 text-2xl font-semibold">{profile.name}</h2>
                <p className="text-sm text-purple-400 mt-1">{profile.title}</p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">{profile.bio}</p>

                <div className="w-full mt-8">
                  <h3 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Contact</h3>
                  <a href={`mailto:${profile.email}`} className="block text-sm mt-3 text-gray-300 hover:text-purple-400 transition-colors break-all">
                    {profile.email}
                  </a>
                </div>

                <div className="w-full mt-8">
                  <h3 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Skills</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span key={s} className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-2 space-y-8">
            {/* Projects Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                <h3 className="text-2xl font-bold">Featured Projects</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">A selection of my recent work. Click to view code or demo.</p>

              <div className="grid grid-cols-1 gap-5">
                {projects.map((p, idx) => (
                  <article 
                    key={p.title}
                    onMouseEnter={() => setHoveredProject(idx)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <h4 className="text-lg font-semibold text-gray-100">{p.title}</h4>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-700/30 text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs px-4 py-1.5 rounded-lg border border-purple-500/50 hover:bg-purple-500/10 text-purple-400 transition-all"
                      >
                        View Project →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                <h3 className="text-2xl font-bold">About Me</h3>
              </div>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                I'm finishing a BCA (passing year 2026) with a passion for building efficient and maintainable systems. My recent work includes converting full-stack apps between frameworks, building registration and OTP flows, and building backend automation for messaging systems. I enjoy learning new stacks and improving performance at both app-level and system-level.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm px-5 py-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 transition-all border border-slate-700/50">
                  View GitHub
                </a>
                <a href={profile.resume} className="text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 transition-all">
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                <h3 className="text-2xl font-bold">Get In Touch</h3>
              </div>
              <p className="text-sm text-gray-400 mt-2 mb-6">
                Want to work together or have a question? Send a message and I'll respond as soon as I can.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text"
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm focus:border-purple-500/50 focus:outline-none transition-colors" 
                    disabled={formStatus.loading}
                  />
                  <input 
                    type="email"
                    placeholder="Your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm focus:border-purple-500/50 focus:outline-none transition-colors" 
                    disabled={formStatus.loading}
                  />
                </div>
                <textarea 
                  placeholder="Your message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm h-32 focus:border-purple-500/50 focus:outline-none transition-colors resize-none" 
                  disabled={formStatus.loading}
                />
                
                {formStatus.success && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>{formStatus.message}</span>
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                    <span className="text-lg">✗</span>
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <button 
                  onClick={handleSubmit}
                  disabled={formStatus.loading}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-purple-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.loading ? "Sending..." : "Send Message"}
                </button>

                <div className="text-xs text-gray-500 text-center mt-4">
                  Or email me directly at <a href={`mailto:${profile.email}`} className="text-purple-400 hover:underline">{profile.email}</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800/50 text-center text-sm text-gray-500">
          <p>Built with React & Tailwind CSS • {new Date().getFullYear()} • {profile.name}</p>
        </footer>
      </div>
    </div>
  );
}
