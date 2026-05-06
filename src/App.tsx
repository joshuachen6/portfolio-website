import { Mail, Github, Linkedin, Cpu, Code, Database, ChevronDown, GraduationCap, MapPin } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <div className="bg-glow" />
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '3rem', marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '1rem' }}>
                Computer Science + Bio-engineering
              </h2>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, fontWeight: 300, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                Building the <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>future</span> of robotics.
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2.5rem', fontWeight: 400 }}>
                Hi, I'm Joshua Chen. I'm a student at <strong>UIUC</strong> focused on Computer Graphics, Robotics, and high-performance software systems.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={18} /> UIUC
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={18} /> Illinois, USA
                </span>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="mailto:jhc3628@gmail.com" className="glass-card" style={{ padding: '0.8rem 1.8rem', textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <Mail size={18} /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-dim)', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Skills Section */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(0, 120, 215, 0.1)', width: '70px', height: '70px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Cpu size={36} color="var(--accent-blue)" />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontWeight: 500 }}>Robotics</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Autonomous path planning and control systems for complex environments.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(75, 181, 255, 0.1)', width: '70px', height: '70px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Code size={36} color="var(--accent-light)" />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontWeight: 500 }}>Systems</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>High-performance C++ applications with a focus on efficiency and scalability.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(0, 120, 215, 0.1)', width: '70px', height: '70px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Database size={36} color="var(--accent-blue)" />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontWeight: 500 }}>Bio-E</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Integrating computational methods with bio-engineering challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 0 3rem', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 500 }}>Joshua Chen</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} • CS + Bio-E at UIUC</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }}>
                <Github size={26} />
              </a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }}>
                <Linkedin size={26} />
              </a>
              <a href="mailto:jhc3628@gmail.com" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }}>
                <Mail size={26} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-12px) translateX(-50%);}
          60% {transform: translateY(-6px) translateX(-50%);}
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;
