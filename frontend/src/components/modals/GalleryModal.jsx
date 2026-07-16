import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryModal({ title, images = [], initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  if (!images.length) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return createPortal(
    <div className="modal-backdrop modal-backdrop--lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close slideshow">
          <X size={24} />
        </button>

        {/* Main Content Area */}
        <div className="lightbox-content">
          {/* Prev Button */}
          <button type="button" className="lightbox-nav lightbox-nav--prev" onClick={handlePrev} aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>

          {/* Active Image */}
          <div className="lightbox-image-wrapper">
            <img src={images[currentIndex]} alt={`${title} screenshot ${currentIndex + 1}`} className="lightbox-image" />
          </div>

          {/* Next Button */}
          <button type="button" className="lightbox-nav lightbox-nav--next" onClick={handleNext} aria-label="Next image">
            <ChevronRight size={36} />
          </button>
        </div>

        {/* Footer Details */}
        <div className="lightbox-footer">
          <div className="lightbox-info">
            <h3>{title}</h3>
            <span>{currentIndex + 1} of {images.length}</span>
          </div>

          {/* Thumbnail Strip */}
          <div className="lightbox-thumbnails">
            {images.map((image, idx) => (
              <button
                key={image}
                type="button"
                className={`lightbox-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <img src={image} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
