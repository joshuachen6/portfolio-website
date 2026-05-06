import { useState, useEffect } from 'react';
import { Mail, GraduationCap, MapPin, Terminal, BrainCircuit, Sparkles } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-grain" />
      
      {/* Dynamic Cursor Glow */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 255, 0.05), transparent 80%)`
      }} />

      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Sparkles size={18} color="var(--accent-cyan)" />
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}>
                Engineering the next generation
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', lineHeight: 0.9, fontWeight: 900, marginBottom: '2rem', color: '#fff', letterSpacing: '-0.05em' }}>
              Joshua <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>Chen</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '700px', fontWeight: 400, lineHeight: 1.5 }}>
              Computer Science + Bio-engineering @ <strong>UIUC</strong>. 
              Bridging the gap between software and hardware through systems, graphics, and algorithms.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <GraduationCap size={18} /> UIUC CS + Bio-E
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                <MapPin size={18} /> Illinois, USA
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                View Work
              </a>
              <a href="mailto:jhc3628@gmail.com" className="glass-card" style={{ padding: '0.8rem 1.8rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, borderRadius: '10px' }}>
                <Mail size={18} /> Say Hello
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', left: '2rem', color: 'rgba(255,255,255,0.2)', writingMode: 'vertical-rl', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll to explore
        </div>
      </header>

      {/* Philosophy Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <Terminal size={32} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 800 }}>Systems Thinking</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                I build tools that prioritize performance and developer experience. From C++20 robotics libraries to interactive Python generators.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <BrainCircuit size={32} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 800 }}>Algorithmic Depth</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Solving complex state-space problems through heuristic search, bitboard engines, and reinforcement learning research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Selected <br/>Projects</h2>
            <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textAlign: 'right', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              06 — Featured Works
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '8rem 0 4rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
                Let's build <br/> something <span style={{ color: 'var(--accent-cyan)' }}>great</span>.
              </h3>
              <p style={{ color: 'var(--text-dim)', maxWidth: '400px' }}>
                Open for collaborations and interesting software engineering challenges.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>Social</span>
                <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-purple)' }}>Contact</span>
                <a href="mailto:jhc3628@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Email</a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>&copy; {new Date().getFullYear()} Joshua Chen</span>
            <span>Handcrafted in Illinois</span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
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
