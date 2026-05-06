import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span className="tag" style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--accent-cyan)', borderColor: 'rgba(0, 242, 255, 0.2)' }}>
          {project.category}
        </span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
          <Github size={20} />
        </a>
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>{project.title}</h3>
      <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
      <div style={{ marginBottom: '1.5rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '0.9rem' }}>
        View Project <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;
