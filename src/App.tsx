import { useEffect, useRef } from 'react';
import { Mail, GraduationCap, MapPin, Terminal, BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobs = useRef<{ x: number, y: number, r: number, opacity: number }[]>([]);

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
      
      // Blobs will naturally merge due to the CSS filter in index.css
      blobs.current.forEach((blob, index) => {
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        // We draw white blobs; the CSS contrast filter creates the liquid look
        ctx.fillStyle = `rgba(255, 255, 255, ${blob.opacity})`;
        ctx.fill();
        
        // Liquid behavior: blobs expand slightly then fade away
        blob.r += 0.5;
        blob.opacity -= 0.015;
        
        if (blob.opacity <= 0) {
          blobs.current.splice(index, 1);
        }
      });
      
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      // Create a blob at mouse position
      blobs.current.push({
        x: e.clientX,
        y: e.clientY,
        r: 30, // Large base radius for convex merging
        opacity: 0.6
      });
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
      
      {/* Liquid Meta-Surface */}
      <div className="liquid-container">
        <canvas ref={canvasRef} className="liquid-canvas" />
      </div>
      
      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
              <Sparkles size={20} color="var(--accent-cyan)" />
              <span style={{ 
                fontSize: '0.95rem', 
                fontWeight: 800, 
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.25em'
              }}>
                Engineering the next generation
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(4.5rem, 14vw, 9rem)', lineHeight: 0.8, fontWeight: 900, marginBottom: '3rem', color: '#fff', letterSpacing: '-0.07em' }}>
              Joshua <br/>
              <span style={{ 
                background: 'linear-gradient(to bottom, #fff 30%, var(--accent-cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Chen</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: 'var(--text-dim)', marginBottom: '4rem', maxWidth: '850px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.02em' }}>
              Computer Science + Bio-engineering @ <strong>UIUC</strong>. <br/>
              Designing high-performance systems and intelligent algorithms.
            </p>
            
            <div style={{ display: 'flex', gap: '4rem', marginBottom: '5rem', color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <GraduationCap size={28} color="var(--accent-cyan)" /> UIUC
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <MapPin size={28} color="var(--accent-purple)" /> Illinois
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Explore Work <ArrowRight size={22} />
              </a>
              <a href="mailto:jhc3628@gmail.com" className="glass-card" style={{ padding: '1.2rem 2.6rem', textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 800, borderRadius: '18px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Mail size={22} /> Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Focus Area */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem' }}>
            <div className="glass-card" style={{ padding: '4rem' }}>
              <Terminal size={56} color="var(--accent-cyan)" style={{ marginBottom: '2.5rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 900 }}>Systems & Graphics</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                Building optimized C++ foundations and real-time visualization tools. Prioritizing efficiency, latency, and architectural elegance.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '4rem' }}>
              <BrainCircuit size={56} color="var(--accent-purple)" style={{ marginBottom: '2.5rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 900 }}>Search & Intelligence</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                Implementing advanced heuristic search and reinforcement learning models. Navigating complex state-spaces with mathematical precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Selected <br/>Works</h2>
            <div style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
              06 — Featured
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '12rem 0 6rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to bottom, transparent, rgba(0,242,255,0.01))' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6rem' }}>
            <div>
              <h3 style={{ fontSize: '4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.06em', marginBottom: '2rem', lineHeight: 1 }}>
                Let's build <br/> the <span style={{ color: 'var(--accent-cyan)' }}>future</span>.
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', maxWidth: '500px' }}>
                Currently in Illinois. Looking for high-impact software engineering opportunities.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>Social</span>
                <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800, fontSize: '1.2rem' }}>GitHub</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800, fontSize: '1.2rem' }}>LinkedIn</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--accent-purple)', letterSpacing: '0.15em' }}>Contact</span>
                <a href="mailto:jhc3628@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800, fontSize: '1.2rem' }}>Email</a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
            <span>&copy; {new Date().getFullYear()} Joshua Chen</span>
            <span style={{ color: 'var(--accent-cyan)' }}>CS + Bio-E @ UIUC</span>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}

export default App;
