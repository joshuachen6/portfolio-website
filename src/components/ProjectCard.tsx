import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <span className="tag">
          {project.category}
        </span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', transition: 'color 0.3s ease' }}>
          <Github size={22} />
        </a>
      </div>
      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', fontWeight: 500, color: 'var(--text-main)' }}>{project.title}</h3>
      <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '1.75rem', flexGrow: 1, fontWeight: 400 }}>{project.description}</p>
      <div style={{ marginBottom: '1.75rem', display: 'flex', flexWrap: 'wrap' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag" style={{ background: 'rgba(255, 255, 255, 0.4)', color: 'var(--text-dim)', border: '1px solid rgba(0, 0, 0, 0.05)', textTransform: 'none' }}>{tag}</span>
        ))}
      </div>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '0.95rem' }}>
        Explore Code <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;
