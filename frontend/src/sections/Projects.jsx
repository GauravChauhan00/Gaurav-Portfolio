import { useMemo, useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import SectionHeader from '../components/common/SectionHeader';
import { projects } from '../data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section-shell section-pad projects">
      <SectionHeader
        eyebrow="Projects"
        title="Premium project case studies"
        description="Each project is managed from one config file, so GitHub links, live demos, screenshots, and case-study details can be updated easily."
      />
      <div className="filter-row" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
