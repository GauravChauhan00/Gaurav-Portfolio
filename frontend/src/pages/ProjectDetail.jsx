import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Globe2, Images } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/common/AnimatedButton';
import Badge from '../components/common/Badge';
import GalleryModal from '../components/modals/GalleryModal';
import { pageTransition } from '../animations/pageTransitions';
import { getProjectById } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  if (!project) {
    return (
      <main className="section-shell section-pad project-detail">
        <Link className="back-link" to="/">
          <ArrowLeft size={18} /> Back home
        </Link>
        <div className="empty-state">
          <h1>Project not found</h1>
          <p>Check the project ID in frontend/src/data/projects.js.</p>
        </div>
      </main>
    );
  }

  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);

  return (
    <motion.main className="section-shell section-pad project-detail" {...pageTransition}>
      <Link className="back-link" to="/">
        <ArrowLeft size={18} /> Back home
      </Link>

      <section className="project-hero glass-card">
        <div>
          <Badge tone="accent">{project.category}</Badge>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
          <div className="project-hero__meta">
            <span>{project.year}</span>
            <span>{project.status}</span>
            <span>{project.role}</span>
          </div>
          <div className="project-hero__actions">
            <AnimatedButton href={project.githubUrl} disabled={!hasGithub} variant="secondary">
              <Github size={18} /> GitHub
            </AnimatedButton>
            <AnimatedButton href={project.liveUrl} disabled={!hasLive}>
              <Globe2 size={18} /> Live Demo
            </AnimatedButton>
            <button className="btn btn--ghost" type="button" onClick={() => setIsGalleryOpen(true)} disabled={!project.screenshots?.length}>
              <Images size={18} /> Screenshot Gallery
            </button>
          </div>
        </div>
        <img src={project.screenshots?.[0]} alt={`${project.title} preview`} />
      </section>

      <section className="case-grid">
        <article className="case-card">
          <span>01</span>
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </article>
        <article className="case-card">
          <span>02</span>
          <h2>Problem Solved</h2>
          <p>{project.problem}</p>
        </article>
        <article className="case-card">
          <span>03</span>
          <h2>Challenge</h2>
          <p>{project.challenges}</p>
        </article>
        <article className="case-card">
          <span>04</span>
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="case-split">
        <div className="case-card">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="case-card">
          <h2>Technologies Used</h2>
          <div className="tech-list tech-list--large">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <h2>Key Learnings</h2>
          <p>{project.learnings}</p>
        </div>
      </section>

      {isGalleryOpen && (
        <GalleryModal title={project.title} images={project.screenshots} onClose={() => setIsGalleryOpen(false)} />
      )}
    </motion.main>
  );
}
