import { User, Calendar, Ruler, Building2, Crosshair, FolderPlus, Bell, Send, TrendingUp, Scale } from 'lucide-react';

export default function PlayerProfileCard({ player }) {
  if (!player) return null;
  const displayName = player.name?.toUpperCase?.() || player.name;

  return (
    <div className="player-profile-card">
      <div className="player-profile-top">
        <div className="player-profile-left">
          <div className="player-profile-avatar-wrap">
            {player.avatar ? (
              <img src={player.avatar} alt="" className="player-profile-avatar" />
            ) : (
              <div className="player-profile-avatar" />
            )}
          </div>
          <div className="player-profile-details">
            <h1 className="player-profile-name">
              {displayName}
              <span className="player-profile-name-emoji" aria-hidden>🦁</span>
            </h1>
            <div className="player-profile-attr-grid">
              <div className="player-profile-attr-card">
                <User size={18} strokeWidth={2} className="player-profile-attr-icon" aria-hidden />
                <span className="player-profile-attr-label">Position</span>
                <span className="player-profile-attr-value">{player.position}</span>
              </div>
              <div className="player-profile-attr-card">
                <Calendar size={18} strokeWidth={2} className="player-profile-attr-icon" aria-hidden />
                <span className="player-profile-attr-label">Âge</span>
                <span className="player-profile-attr-value">{player.age} ans</span>
              </div>
              <div className="player-profile-attr-card">
                <Ruler size={18} strokeWidth={2} className="player-profile-attr-icon" aria-hidden />
                <span className="player-profile-attr-label">Taille / Pied</span>
                <span className="player-profile-attr-value">1.82m • Droit</span>
              </div>
              <div className="player-profile-attr-card">
                <span className="player-profile-attr-icon player-profile-attr-flag" aria-hidden>🇫🇷</span>
                <span className="player-profile-attr-label">Nationalité</span>
                <span className="player-profile-attr-value">France</span>
              </div>
            </div>
            <div className="player-profile-club-card">
              <Building2 size={18} strokeWidth={2} className="player-profile-club-icon" aria-hidden />
              <span>{player.club}</span>
              <span className="player-profile-club-dot" aria-hidden>•</span>
              <span>{player.league}</span>
            </div>
          </div>
        </div>

        <div className="player-profile-value-panel">
          <div className="player-profile-value-header">
            <Scale size={18} strokeWidth={2} className="player-profile-value-icon" aria-hidden />
            <span className="player-profile-value-title">VALEUR MARCHANDE</span>
          </div>
          <div className="player-profile-value-amount-wrap">
            <span className="player-profile-value-amount">12.500.000</span>
            <span className="player-profile-value-currency">€</span>
          </div>
          <div className="player-profile-value-change">
            <TrendingUp size={16} strokeWidth={2} aria-hidden />
            <span>+2.3M (6 mois)</span>
          </div>
          <div className="player-profile-value-chart" aria-hidden />
          <div className="player-profile-contract-wrap">
            <Calendar size={16} strokeWidth={2} aria-hidden />
            <div>
              <span className="player-profile-contract-label">Fin de contrat</span>
              <span className="player-profile-contract-date">30 juin 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="player-profile-actions-row">
        <button type="button" className="player-profile-btn player-profile-btn-scout">
          <Crosshair size={18} strokeWidth={2} aria-hidden /> Scouter
        </button>
        <button type="button" className="player-profile-btn player-profile-btn-shortlist">
          <FolderPlus size={18} strokeWidth={2} aria-hidden /> Shortlist
        </button>
        <button type="button" className="player-profile-btn player-profile-btn-alert">
          <Bell size={18} strokeWidth={2} aria-hidden /> Alerte
        </button>
        <button type="button" className="player-profile-btn player-profile-btn-propose">
          <Send size={18} strokeWidth={2} aria-hidden /> Proposer
        </button>
      </div>
    </div>
  );
}
