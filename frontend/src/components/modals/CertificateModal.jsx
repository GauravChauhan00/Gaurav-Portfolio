import { X } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const isPdf = certificate.filePath?.toLowerCase().endsWith('.pdf');

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal modal--certificate">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close certificate preview">
          <X size={20} />
        </button>
        <div className="modal__header">
          <span>{certificate.issuer || certificate.platform}</span>
          <h3>{certificate.title}</h3>
        </div>
        <div className="certificate-preview">
          {certificate.filePath ? (
            isPdf ? (
              <iframe title={certificate.title} src={certificate.filePath} />
            ) : (
              <img src={certificate.filePath} alt={certificate.title} />
            )
          ) : (
            <p>Certificate file not added yet. Add the PDF/image path in certificates.js to enable preview.</p>
          )}
        </div>
      </div>
    </div>
  );
}
