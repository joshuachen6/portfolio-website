import { useRef, useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    setRotation({ x: dy / -15, y: dx / 15 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="blueprint-card" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%' 
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div style={{ color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono', fontSize: '0.75rem', fontWeight: 600 }}>
          {project.id.toUpperCase().replace(/-/g, '_')}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
          <Github size={20} />
        </a>
      </div>
      
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700, color: '#fff' }}>
        {project.title}
      </h3>
      
      <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6, fontFamily: 'JetBrains Mono' }}>
        {project.description}
      </p>
      
      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        src_inspect <ArrowUpRight size={14} />
      </a>
    </div>
  );
};

export default ProjectCard;
