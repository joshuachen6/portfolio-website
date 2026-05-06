import { Mail, Github, Linkedin, Cpu, Code, Database, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <div className="bg-glow" />
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h2 style={{ color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>
              Software Engineer & Robotics Enthusiast
            </h2>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 800, marginBottom: '1.5rem' }}>
              Building the <span style={{ color: 'var(--accent-cyan)' }}>future</span> of autonomous systems.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Hi, I'm Joshua Chen. I specialize in C++, robotics, and building tools that bridge the gap between software and the physical world.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="mailto:jchen@example.com" className="glass-card" style={{ padding: '0.75rem 1.5rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-dim)', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Stats/Icons Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Cpu size={40} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Robotics</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Path planning & Control</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Code size={40} color="var(--accent-purple)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Systems</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>High-performance C++</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Database size={40} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Tools</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Developer productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '5rem 0 3rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Joshua Chen</h3>
              <p style={{ color: 'var(--text-dim)' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
                <Github size={24} />
              </a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-purple)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:jchen@example.com" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-10px) translateX(-50%);}
          60% {transform: translateY(-5px) translateX(-50%);}
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;
