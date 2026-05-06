import { Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <span className="tag">
          {project.category}
        </span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
          <Github size={24} />
        </a>
      </div>
      
      <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
        {project.title}
      </h3>
      
      <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', marginBottom: '2rem', flexGrow: 1, fontWeight: 400, lineHeight: 1.6 }}>
        {project.description}
      </p>
      
      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag" style={{ background: 'rgba(255, 255, 255, 0.02)', color: 'var(--text-dim)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>{tag}</span>
        ))}
      </div>
      
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.6rem', 
        color: '#fff', 
        textDecoration: 'none', 
        fontSize: '0.9rem', 
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginTop: 'auto'
      }}>
        View Source <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;
