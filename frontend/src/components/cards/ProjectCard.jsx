import { useState } from 'react';
import { ArrowUpRight, Github, Globe2, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import MagneticCard from '../common/MagneticCard';
import GalleryModal from '../modals/GalleryModal';

export default function ProjectCard({ project }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);
  const image = project.screenshots?.[0];

  return (
    <MagneticCard className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card__media-link">
        <div className="project-card__media">
          {image && <img src={image} alt={`${project.title} preview`} loading="lazy" />}
          <div className="project-card__status">{project.status}</div>
        </div>
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <Badge>{project.category}</Badge>
          <span>{project.year}</span>
        </div>
        <Link to={`/projects/${project.id}`} className="project-card__title-link">
          <h3>{project.title}</h3>
        </Link>
        <p>{project.shortDescription}</p>
        <div className="tech-list">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <Link className="icon-link" to={`/projects/${project.id}`}>
            Case Study <ArrowUpRight size={16} />
          </Link>
          <a className={`icon-link ${!hasGithub ? 'icon-link--disabled' : ''}`} href={hasGithub ? project.githubUrl : undefined} target="_blank" rel="noreferrer" aria-disabled={!hasGithub}>
            <Github size={16} /> GitHub
          </a>
          <a className={`icon-link ${!hasLive ? 'icon-link--disabled' : ''}`} href={hasLive ? project.liveUrl : undefined} target="_blank" rel="noreferrer" aria-disabled={!hasLive}>
            <Globe2 size={16} /> Live
          </a>
          {project.screenshots?.length > 0 && (
            <button
              className="icon-link"
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <Images size={16} /> Gallery
            </button>
          )}
        </div>
      </div>
      {isGalleryOpen && (
        <GalleryModal
          title={project.title}
          images={project.screenshots}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </MagneticCard>
  );
}
