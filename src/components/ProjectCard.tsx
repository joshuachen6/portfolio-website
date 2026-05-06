import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <span className="tag" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}>
          {project.category}
        </span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
          <Github size={22} />
        </a>
      </div>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>{project.title}</h3>
      <p style={{ color: 'var(--text-dim)', fontSize: '1rem', marginBottom: '2rem', flexGrow: 1, fontWeight: 400, lineHeight: 1.7 }}>{project.description}</p>
      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag" style={{ margin: 0 }}>{tag}</span>
        ))}
      </div>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '1rem' }}>
        View Source <ExternalLink size={18} />
      </a>
    </div>
  );
};

export default ProjectCard;
