import { Zap, FileText, Building2, Send, Check } from 'lucide-react';
import RadarChart from './RadarChart';
import './PlayerProfileScrollSection.css';

const stats2026 = [
  { label: 'Matchs joués', value: '23', color: null },
  { label: 'Buts', value: '12', color: 'green' },
  { label: 'Passes décisives', value: '7', color: 'blue' },
  { label: 'Cartons', value: null, cards: { yellow: 3, orange: 0, red: 0 } },
  { label: 'Note moyenne', value: '7.8', color: 'orange' },
];

const gameProfileData = {
  Vitesse: 85,
  Dribble: 78,
  Tir: 82,
  Passe: 88,
  Physique: 75,
  Duel: 72,
};

const gameProfileStats = [
  { label: 'Vitesse', value: '85/100' },
  { label: 'Dribble', value: '78/100' },
  { label: 'Tir', value: '82/100' },
  { label: 'Passe', value: '88/100' },
  { label: 'Physique', value: '75/100' },
  { label: 'Duel', value: '72/100' },
];

const interestedClubs = [
  { name: 'FC Porto', match: 85 },
  { name: 'Genk', match: 78 },
  { name: 'Udinese', match: 72 },
  { name: 'Lorient', match: 68 },
];

export default function PlayerProfileScrollSection() {
  return (
    <div className="player-profile-scroll-section">
      <div className="player-profile-scroll-grid">
        <div className="player-profile-scroll-panel player-profile-scroll-left">
          <div className="player-profile-scroll-block">
            <h3 className="player-profile-scroll-title">
              <span className="player-profile-scroll-title-icon" aria-hidden>👕</span>
              Statistiques 2025/26
            </h3>
            <ul className="player-profile-scroll-stats">
              {stats2026.map((s) => (
                <li key={s.label} className="player-profile-scroll-stat-row">
                  <span className="player-profile-scroll-stat-label">{s.label}</span>
                  {s.cards ? (
                    <span className="player-profile-scroll-stat-cards">
                      <span>{s.cards.yellow}</span>
                      <span className="card-dot card-yellow" aria-hidden />
                      <span>{s.cards.orange}</span>
                      <span className="card-dot card-orange" aria-hidden />
                      <span>{s.cards.red}</span>
                      <span className="card-dot card-red" aria-hidden />
                    </span>
                  ) : (
                    <span className={`player-profile-scroll-stat-value ${s.color ? `value-${s.color}` : ''}`}>{s.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="player-profile-scroll-divider" />
          <div className="player-profile-scroll-block">
            <h3 className="player-profile-scroll-title">
              <Zap size={18} strokeWidth={2} className="player-profile-scroll-title-icon zap" aria-hidden />
              Profil de Jeu
            </h3>
            <div className="player-profile-radar-wrap">
              <RadarChart data={gameProfileData} size={220} />
            </div>
            <ul className="player-profile-scroll-profile-list">
              {gameProfileStats.map((s) => (
                <li key={s.label}>
                  <span>{s.label}</span>
                  <span>{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="player-profile-scroll-panel player-profile-scroll-center">
          <div className="player-profile-scroll-block">
            <h3 className="player-profile-scroll-title player-profile-scroll-title-with-pill">
              <FileText size={18} strokeWidth={2} className="player-profile-scroll-title-icon" aria-hidden />
              Mon Activité (Journal Avocat)
              <span className="player-profile-scroll-pill">0h00</span>
            </h3>
            <p className="player-profile-scroll-empty">Aucune activité enregistrée</p>
            <button type="button" className="player-profile-scroll-add-btn">
              <span className="player-profile-scroll-add-icon" aria-hidden>+</span>
              Ajouter une activité
            </button>
          </div>
        </div>

        <div className="player-profile-scroll-panel player-profile-scroll-right">
          <div className="player-profile-scroll-block">
            <h3 className="player-profile-scroll-title">
              <Building2 size={18} strokeWidth={2} className="player-profile-scroll-title-icon green" aria-hidden />
              Clubs Intéressés
            </h3>
            <div className="player-profile-clubs-list">
              {interestedClubs.map((c) => (
                <div key={c.name} className="player-profile-club-match-card">
                  <div className="player-profile-club-match-icon" aria-hidden />
                  <div className="player-profile-club-match-info">
                    <span className="player-profile-club-match-name">{c.name}</span>
                    <span className="player-profile-club-match-label">Matching IA</span>
                    <div className="player-profile-club-match-bar-wrap">
                      <div className="player-profile-club-match-bar" style={{ width: `${c.match}%` }} />
                    </div>
                  </div>
                  <span className="player-profile-club-match-pct">{c.match}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="player-profile-scroll-block player-profile-reco-card">
            <h3 className="player-profile-scroll-title">
              <Zap size={18} strokeWidth={2} className="player-profile-scroll-title-icon zap" aria-hidden />
              Recommandation IA
            </h3>
            <p className="player-profile-reco-text">
              Ce joueur correspond parfaitement aux besoins de <strong className="player-profile-reco-club">FC Porto</strong> (85% match).
            </p>
            <ul className="player-profile-reco-list">
              <li><Check size={16} strokeWidth={2.5} className="reco-check" aria-hidden /> Budget compatible (8-15M€)</li>
              <li><Check size={16} strokeWidth={2.5} className="reco-check" aria-hidden /> Profil offensif recherché</li>
              <li><Check size={16} strokeWidth={2.5} className="reco-check" aria-hidden /> Âge idéal pour projet jeunes</li>
            </ul>
            <button type="button" className="player-profile-propose-btn">
              <Send size={18} strokeWidth={2} aria-hidden /> Proposer à Porto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
