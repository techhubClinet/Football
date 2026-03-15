import { useEffect } from 'react';
import { X } from 'lucide-react';
import PlayerProfileCard from './PlayerProfileCard';
import PlayerProfileScrollSection from './PlayerProfileScrollSection';
import '../pages/PlayerProfile.css';
import './PlayerProfileModal.css';

export default function PlayerProfileModal({ isOpen, onClose, player }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="player-profile-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="player-profile-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="player-profile-modal-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={24} strokeWidth={2} aria-hidden />
        </button>
        <PlayerProfileCard player={player} />
        <PlayerProfileScrollSection />
      </div>
    </div>
  );
}
