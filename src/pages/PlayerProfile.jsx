import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PlayerProfileCard from '../components/PlayerProfileCard';
import './PlayerProfile.css';

export default function PlayerProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const player = state?.player;

  if (!player) {
    return (
      <div className="player-profile-page">
        <button type="button" className="player-profile-back" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} strokeWidth={2} aria-hidden /> Retour
        </button>
        <p className="player-profile-empty">Aucun joueur sélectionné.</p>
      </div>
    );
  }

  return (
    <div className="player-profile-page">
      <button type="button" className="player-profile-back" onClick={() => navigate(-1)}>
        <ChevronLeft size={20} strokeWidth={2} aria-hidden /> Retour
      </button>
      <PlayerProfileCard player={player} />
    </div>
  );
}
