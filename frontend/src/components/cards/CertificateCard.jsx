import { Download, ExternalLink, FileText } from 'lucide-react';
import Badge from '../common/Badge';

export default function CertificateCard({ certificate, onView }) {
  const hasFile = Boolean(certificate.filePath);
  const hasCredential = Boolean(certificate.credentialUrl);

  return (
    <div className="certificate-row">
      {/* Line 1: Icon + Title + Actions */}
      <div className="certificate-row__top">
        <div className="certificate-row__icon">
          <FileText size={14} />
        </div>
        <div className="certificate-row__info">
          <h4>{certificate.title}</h4>
        </div>
        <div className="certificate-row__actions">
          <button type="button" className="small-btn" onClick={() => onView(certificate)} disabled={!hasFile}>
            View
          </button>
          <a className={`small-btn small-btn--ghost ${!hasFile ? 'small-btn--disabled' : ''}`} href={hasFile ? certificate.filePath : undefined} download aria-disabled={!hasFile}>
            <Download size={10} />
          </a>
          {hasCredential && (
            <a className="small-btn small-btn--ghost" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      {/* Line 2: Issuer + Category + Date */}
      <div className="certificate-row__meta">
        <span className="certificate-row__issuer">{certificate.issuer}</span>
        <span className="certificate-row__category">
          <Badge tone="soft">{certificate.category}</Badge>
        </span>
        <span className="certificate-row__date">{certificate.date}</span>
      </div>
    </div>
  );
}
