import { Mail, Github, Linkedin, Database, ChevronDown, GraduationCap, MapPin, Terminal, BrainCircuit } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <div className="bg-glow" />
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                padding: '0.5rem 1.25rem', 
                borderRadius: '100px', 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                color: 'var(--accent-cyan)',
                border: '1px solid rgba(0, 217, 255, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Software Engineer
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.95, fontWeight: 800, marginBottom: '2rem', color: '#fff', letterSpacing: '-0.04em' }}>
              Joshua <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Chen</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3.5rem', fontWeight: 400, lineHeight: 1.5 }}>
              Computer Science + Bio-engineering at <strong>UIUC</strong>. 
              Focused on high-performance systems, heuristic search, and computational modeling.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem', color: 'var(--text-dim)', fontSize: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <GraduationCap size={20} /> UIUC
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={20} /> Illinois
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary" style={{ background: '#fff', color: '#000' }}>
                Explore Projects
              </a>
              <a href="mailto:jhc3628@gmail.com" className="btn-primary">
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-dim)', opacity: 0.5 }}>
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Categories/Stats */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <Terminal size={32} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Systems</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Low-level C++ optimization and high-performance library design.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <BrainCircuit size={32} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Algorithms</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Heuristic search, bitboard engines, and reinforcement learning.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <Database size={32} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Modeling</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>Bridging computational science with bio-engineering challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '4rem' }}>Selected Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '3rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '8rem 0 4rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 700, color: '#fff' }}>Joshua Chen</h3>
              <p style={{ color: 'var(--text-dim)' }}>CS + Bio-E @ UIUC &copy; {new Date().getFullYear()}</p>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'}>
                <Github size={28} />
              </a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'}>
                <Linkedin size={28} />
              </a>
              <a href="mailto:jhc3628@gmail.com" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'}>
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-10px) translateX(-50%);}
          60% {transform: translateY(-5px) translateX(-50%);}
        }
      `}</style>
    </>
  );
}

export default App;
