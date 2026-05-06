import { Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="tag" style={{ background: 'rgba(0, 242, 255, 0.05)', color: 'var(--accent-cyan)', borderColor: 'rgba(0, 242, 255, 0.1)' }}>
            {project.category}
          </span>
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
          <Github size={20} />
        </a>
      </div>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
        {project.title}
      </h3>
      
      <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1, fontWeight: 400, lineHeight: 1.6 }}>
        {project.description}
      </p>
      
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        color: '#fff', 
        textDecoration: 'none', 
        fontSize: '0.85rem', 
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginTop: 'auto'
      }}>
        View Project <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default ProjectCard;
