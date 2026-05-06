import { useEffect, useRef } from 'react';
import { Mail, GraduationCap, MapPin, Terminal, BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Optimized settings
    const ratio = 8; // Higher ratio = much better performance
    let width = Math.floor(window.innerWidth / ratio);
    let height = Math.floor(window.innerHeight / ratio);
    let size = width * height;
    
    let buffer1 = new Int32Array(size);
    let buffer2 = new Int32Array(size);
    let imgData = ctx.createImageData(width, height);
    
    // Pre-fill ImageData with cyan color, only alpha will change
    for (let i = 0; i < size * 4; i += 4) {
      imgData.data[i] = 0;     // R
      imgData.data[i + 1] = 242; // G
      imgData.data[i + 2] = 255; // B
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(window.innerWidth / ratio);
      height = Math.floor(window.innerHeight / ratio);
      size = width * height;
      buffer1 = new Int32Array(size);
      buffer2 = new Int32Array(size);
      imgData = ctx.createImageData(width, height);
      for (let i = 0; i < size * 4; i += 4) {
        imgData.data[i] = 0; imgData.data[i+1] = 242; imgData.data[i+2] = 255;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const rippleAt = (x: number, y: number) => {
      const ix = (x / ratio) | 0;
      const iy = (y / ratio) | 0;
      const index = iy * width + ix;
      if (index >= width && index < size - width) {
        // High value for sharp "cut"
        buffer1[index] = 1024;
      }
    };

    const update = () => {
      // Optimized integer-based wave simulation
      for (let i = width; i < size - width; i++) {
        buffer2[i] = ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) >> 1) - buffer2[i];
        buffer2[i] -= buffer2[i] >> 5; // Damping
      }
      let temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;
    };

    const render = () => {
      const data = imgData.data;
      for (let i = 0; i < size; i++) {
        const val = buffer1[i];
        // Only update alpha channel
        const alpha = (val > 0 ? val : -val) >> 2;
        data[i * 4 + 3] = alpha > 200 ? 200 : alpha;
      }
      
      // Use a temporary canvas to scale up efficiently
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      tempCanvas.getContext('2d')?.putImageData(imgData, 0, 0);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
    };

    let animationId: number;
    const loop = () => {
      update();
      render();
      animationId = requestAnimationFrame(loop);
    };

    loop();

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Fine-grained interpolation for a smooth "cut" line
      const steps = Math.max(1, Math.floor(dist / 1.5));
      for (let i = 0; i < steps; i++) {
        const px = lastMousePos.current.x + (dx * i) / steps;
        const py = lastMousePos.current.y + (dy * i) / steps;
        rippleAt(px, py);
      }
      
      lastMousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
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
