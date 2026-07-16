import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function GalleryModal({ title, images = [], onClose }) {
  if (!images.length) return null;

  return createPortal(
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal modal--gallery">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close project gallery">
          <X size={20} />
        </button>
        <div className="modal__header">
          <span>Project Gallery</span>
          <h3>{title}</h3>
        </div>
        <div className="gallery-grid">
          {images.map((image) => (
            <img key={image} src={image} alt={`${title} screenshot`} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
