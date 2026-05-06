import { useEffect, useRef } from 'react';
import { Mail, GraduationCap, MapPin, Terminal, BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ripples.current = ripples.current.filter(ripple => ripple.opacity > 0);
      
      ripples.current.forEach(ripple => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 242, 255, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ripple.radius += 2;
        ripple.opacity -= 0.01;
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) {
        ripples.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          opacity: 0.5
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <div className="bg-mesh" />
      <canvas ref={canvasRef} className="ripple-canvas" />
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Sparkles size={18} color="var(--accent-cyan)" />
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}>
                Engineering the next generation
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: 0.85, fontWeight: 900, marginBottom: '2.5rem', color: '#fff', letterSpacing: '-0.06em' }}>
              Joshua <br/>
              <span style={{ 
                background: 'linear-gradient(to bottom, #fff 40%, var(--accent-cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Chen</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-dim)', marginBottom: '3.5rem', maxWidth: '750px', fontWeight: 400, lineHeight: 1.5 }}>
              Computer Science + Bio-engineering @ <strong>UIUC</strong>. <br/>
              Architecting high-performance systems and algorithms.
            </p>
            
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <GraduationCap size={24} color="var(--accent-cyan)" /> UIUC
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={24} color="var(--accent-purple)" /> Illinois
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Explore Work <ArrowRight size={20} />
              </a>
              <a href="mailto:jhc3628@gmail.com" className="glass-card" style={{ padding: '1rem 2.2rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, borderRadius: '14px' }}>
                <Mail size={20} /> Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Focus Area */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div className="glass-card" style={{ padding: '3.5rem' }}>
              <Terminal size={48} color="var(--accent-cyan)" style={{ marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: '#fff', fontWeight: 800 }}>Systems & Graphics</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Focusing on low-level optimization and real-time rendering. Building robust foundations for complex software ecosystems.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '3.5rem' }}>
              <BrainCircuit size={48} color="var(--accent-purple)" style={{ marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: '#fff', fontWeight: 800 }}>Search & Intelligence</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Exploring the frontiers of heuristic search and reinforcement learning. Creating agents that can solve complex state-spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Selected <br/>Works</h2>
            <div style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              06 — Featured
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '10rem 0 5rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '5rem' }}>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', marginBottom: '1.5rem', lineHeight: 1 }}>
                Let's start <br/> the <span style={{ color: 'var(--accent-cyan)' }}>conversation</span>.
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '450px' }}>
                Currently based in Illinois. Open to discussions on systems, graphics, and robotics.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '4rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>Social</span>
                <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>GitHub</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>LinkedIn</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--accent-purple)', letterSpacing: '0.1em' }}>Contact</span>
                <a href="mailto:jhc3628@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>Email</a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <span>&copy; {new Date().getFullYear()} Joshua Chen</span>
            <span style={{ color: 'var(--accent-cyan)' }}>UIUC CS + Bio-E</span>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-15px);}
          60% {transform: translateY(-8px);}
        }
      `}</style>
    </>
  );
}

export default App;
