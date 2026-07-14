import { Download, ExternalLink, X } from 'lucide-react';
import Badge from '../common/Badge';

export default function CourseCertificateModal({ bundle, onClose, onViewCertificate }) {
  if (!bundle) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal modal--bundle">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close course bundle">
          <X size={20} />
        </button>
        <div className="modal__header">
          <span>{bundle.platform}</span>
          <h3>{bundle.courseName}</h3>
          <p>{bundle.description}</p>
          <div className="modal__badges">
            <Badge>{bundle.category}</Badge>
            <Badge tone="soft">{bundle.totalCertificates} certificates</Badge>
          </div>
        </div>

        <div className="bundle-list">
          {bundle.certificates.map((certificate, index) => {
            const hasFile = Boolean(certificate.filePath);
            return (
              <article key={`${certificate.title}-${index}`} className="bundle-list__item">
                <div>
                  <span>Certificate {index + 1}</span>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.date}</p>
                  {certificate.note && <small>{certificate.note}</small>}
                </div>
                <div className="bundle-list__actions">
                  <button type="button" className="small-btn" onClick={() => onViewCertificate(certificate)} disabled={!hasFile}>
                    View
                  </button>
                  <a className={`small-btn small-btn--ghost ${!hasFile ? 'small-btn--disabled' : ''}`} href={hasFile ? certificate.filePath : undefined} download aria-disabled={!hasFile}>
                    <Download size={14} /> Download
                  </a>
                  {certificate.credentialUrl && (
                    <a className="small-btn small-btn--ghost" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={14} /> Credential
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
