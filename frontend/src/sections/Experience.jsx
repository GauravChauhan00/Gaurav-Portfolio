import ExperienceCard from '../components/cards/ExperienceCard';
import SectionHeader from '../components/common/SectionHeader';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-shell section-pad experience">
      <SectionHeader
        eyebrow="Experience"
        title="Data validation, API testing, and analytical workflow experience"
        description="Focused on practical quality checks, clean documentation, and reliable data/reporting outcomes."
      />
      <div className="timeline">
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </section>
  );
}
