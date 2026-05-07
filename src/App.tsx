import { Mail, Terminal, Activity, Ruler, BookOpen } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { courseGroups } from './data/courses';

function App() {
  return (
    <>
      <div className="bg-blueprint" />
      <div className="bg-glow" />
      
      {/* Drafting Overlay UI */}
      <div style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-dim)', fontFamily: 'JetBrains Mono', fontSize: '10px' }}>
        <div>LAT: 40.1068° N</div>
        <div>LON: 88.2272° W</div>
        <div style={{ color: 'var(--accent-cyan)' }}>STATUS: ACTIVE</div>
      </div>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 10, color: 'var(--text-dim)', fontFamily: 'JetBrains Mono', fontSize: '10px', textAlign: 'right' }}>
        <div>RELEASE v2.0.26</div>
        <div>SYSTEMS_OPTIMIZED</div>
      </div>

      {/* Hero Section */}
      <header style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-cyan)' }} />
              <span style={{ 
                fontSize: '0.8rem', 
                fontFamily: 'JetBrains Mono',
                fontWeight: 600, 
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.3em'
              }}>
                Engineering Portfolio
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', lineHeight: 0.75, fontWeight: 900, marginBottom: '3rem', color: '#fff', letterSpacing: '-0.08em' }}>
              Joshua <br/>
              <span style={{ 
                background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Chen</span>
            </h1>
            
            <div style={{ display: 'flex', gap: '4rem', marginBottom: '4rem', color: '#fff', fontFamily: 'JetBrains Mono' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Focus</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Systems + Algorithms</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Institution</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>UIUC (CS + Bio-E)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Execute_View
              </a>
              <a href="mailto:jhc3628@gmail.com" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                color: 'var(--text-dim)', 
                textDecoration: 'none', 
                fontSize: '0.8rem', 
                fontFamily: 'JetBrains Mono',
                fontWeight: 600,
                textTransform: 'uppercase'
              }} onMouseOver={(e) => (e.currentTarget.style.color = '#fff')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}>
                <Mail size={16} /> Init_Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Blueprint Spec Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="blueprint-card">
              <Terminal size={32} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>MODULE: SYSTEMS</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'JetBrains Mono' }}>
                Development of low-level C++ foundations. High-performance computing and hardware-software integration.
              </p>
            </div>
            <div className="blueprint-card">
              <Activity size={32} color="var(--accent-purple)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>MODULE: SEARCH</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'JetBrains Mono' }}>
                Optimization of state-space navigation. Heuristic search implementations and data-driven decision engines.
              </p>
            </div>
            <div className="blueprint-card">
              <Ruler size={32} color="var(--accent-cyan)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>MODULE: GRAPHICS</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'JetBrains Mono' }}>
                Real-time software rendering and hardware-accelerated visualization. Bridging mathematical models with pixels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section id="coursework" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>coursework.log</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700 }}>UIUC // CS + BIOE</div>
                <div style={{ color: 'var(--text-dim)', fontFamily: 'JetBrains Mono', fontSize: '8px' }}>CATALOG_YR: 2024-08</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {courseGroups.map(group => (
              <div key={group.label} className="blueprint-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <BookOpen size={18} color="var(--accent-cyan)" />
                  <span style={{ color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                    {group.label}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0 }}>
                  {group.courses.map(course => (
                    <li key={course.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.05)', paddingBottom: '0.6rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0 }}>
                        <span style={{ color: '#fff', fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 600 }}>
                          {course.code}
                        </span>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono', lineHeight: 1.4 }}>
                          {course.title}
                        </span>
                      </div>
                      {course.inProgress && (
                        <span style={{ color: 'var(--accent-purple)', fontFamily: 'JetBrains Mono', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', whiteSpace: 'nowrap' }}>
                          [IP]
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>catalog.tar.gz</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700 }}>6 PROJECTS</div>
                <div style={{ color: 'var(--text-dim)', fontFamily: 'JetBrains Mono', fontSize: '8px' }}>LOC: ILLINOIS_01</div>
              </div>
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
      <footer style={{ padding: '10rem 0 4rem', borderTop: '1px solid var(--grid-line)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6rem' }}>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.06em', marginBottom: '1.5rem', lineHeight: 1 }}>
                eof.
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: '400px', fontFamily: 'JetBrains Mono' }}>
                Thank you for inspecting my work. I am currently open to high-performance systems and algorithms challenges.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.2em' }}>Connections</span>
                <a href="https://github.com/joshuachen6" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/joshua-chen-b457aa331/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', fontFamily: 'JetBrains Mono' }}>
            <span>&copy; {new Date().getFullYear()} Joshua Chen</span>
            <span>Handcrafted in Illinois</span>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-color); }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        ::-webkit-scrollbar-thumb:hover { background: var(--accent-cyan); }
      `}</style>
    </>
  );
}

export default App;
