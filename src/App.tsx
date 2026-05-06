import { Mail, Github, Linkedin, ChevronDown, GraduationCap, MapPin, Terminal, BrainCircuit } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <div className="bg-glow" />
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ 
                background: 'rgba(0, 242, 255, 0.1)', 
                padding: '0.6rem 1.5rem', 
                borderRadius: '100px', 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                color: 'var(--accent-cyan)',
                border: '1px solid rgba(0, 242, 255, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em'
              }}>
                Software Engineer
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 7.5rem)', lineHeight: 0.9, fontWeight: 900, marginBottom: '2.5rem', color: '#fff', letterSpacing: '-0.05em' }}>
              Joshua <span style={{ 
                background: 'linear-gradient(to bottom, #fff 30%, var(--accent-cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Chen</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', color: 'var(--text-dim)', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 4rem', fontWeight: 400, lineHeight: 1.4 }}>
              CS + Bio-engineering at <strong>UIUC</strong>. 
              Architecting high-performance systems, search algorithms, and graphics engines.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '5rem', color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <GraduationCap size={24} color="var(--accent-cyan)" /> UIUC
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={24} color="var(--accent-purple)" /> Illinois
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects
              </a>
              <a href="mailto:jhc3628@gmail.com" className="glass-card" style={{ padding: '1rem 2.2rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, borderRadius: '16px' }}>
                <Mail size={20} /> Contact
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--accent-cyan)', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={36} />
        </div>
      </header>

      {/* Domain Focus */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'left', borderLeft: '4px solid var(--accent-cyan)' }}>
              <Terminal size={40} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Systems & Graphics</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: 1.6 }}>C++ optimization, hardware-accelerated visualization, and real-time rendering engines.</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'left', borderLeft: '4px solid var(--accent-purple)' }}>
              <BrainCircuit size={40} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Algorithms & AI</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: 1.6 }}>Advanced search techniques, bitboard engines, and reinforcement learning research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '10rem 0 5rem', borderTop: '1px solid var(--card-border)', background: 'linear-gradient(to bottom, transparent, rgba(0,242,255,0.02))' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>Joshua Chen</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Software Engineer • CS + Bio-E @ UIUC</p>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'all 0.3s ease' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-5px)';}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.transform = 'translateY(0)';}}>
                <Github size={32} />
              </a>
              <a href="#" style={{ color: 'var(--text-dim)', transition: 'all 0.3s ease' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-purple)'; e.currentTarget.style.transform = 'translateY(-5px)';}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.transform = 'translateY(0)';}}>
                <Linkedin size={32} />
              </a>
              <a href="mailto:jhc3628@gmail.com" style={{ color: 'var(--text-dim)', transition: 'all 0.3s ease' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-5px)';}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.transform = 'translateY(0)';}}>
                <Mail size={32} />
              </a>
            </div>
          </div>
          <div style={{ marginTop: '5rem', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Joshua Chen. Built with React & TypeScript.
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-15px) translateX(-50%);}
          60% {transform: translateY(-7px) translateX(-50%);}
        }
      `}</style>
    </>
  );
}

export default App;
