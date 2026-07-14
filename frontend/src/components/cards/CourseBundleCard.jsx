import { Layers3 } from 'lucide-react';
import Badge from '../common/Badge';

export default function CourseBundleCard({ bundle, onOpen }) {
  return (
    <article className="course-bundle-card">
      <div className="course-bundle-card__header">
        <div className="course-bundle-card__icon">
          <Layers3 size={24} />
        </div>
        <Badge tone="accent">Course Bundle</Badge>
      </div>
      <h3>{bundle.courseName}</h3>
      <p>{bundle.description}</p>
      <div className="course-bundle-card__meta">
        <span>{bundle.platform}</span>
        <span>{bundle.category}</span>
        <span>{bundle.totalCertificates} certificates</span>
      </div>
      <button type="button" className="small-btn" onClick={() => onOpen(bundle)}>
        Open Bundle
      </button>
    </article>
  );
}
