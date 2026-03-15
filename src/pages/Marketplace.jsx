import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, Heart, AlertCircle, X, ChevronRight } from '../components/Icons';
import './Marketplace.css';

const summaryCards = [
  { label: 'Matchs Actifs', value: '12', icon: Target },
  { label: 'Likes', value: '8', highlight: 'green', icon: Heart },
  { label: 'Urgent', value: '3', highlight: 'red', icon: AlertCircle },
];

const currentPlayer = {
  name: 'Thomas Müller Jr.',
  position: 'Milieu offensif',
  age: 22,
  club: 'Borussia Dortmund II',
  matchDesc: 'Match parfait pour Montpellier qui cherche un MO créatif',
  strengths: ['Vision de jeu', 'Passes décisives', 'Expérience Bundesliga'],
  value: '2.5M€',
  matchPercent: 94,
  currentIndex: 1,
  total: 3,
  avatarId: 32,
};

export default function Marketplace() {
  const [mode, setMode] = useState('club');

  return (
    <div className="marketplace-page">
      <div className="marketplace-smart-card">
        <div className="marketplace-smart-header">
          <div>
            <h1 className="marketplace-smart-title">Smart Match</h1>
            <p className="marketplace-smart-subtitle">Matching intelligent entre joueurs et besoins clubs</p>
          </div>
          <div className="marketplace-mode-toggle">
            <button
              type="button"
              className={`marketplace-mode-btn ${mode === 'club' ? 'active' : ''}`}
              onClick={() => setMode('club')}
            >
              Mode Club
            </button>
            <button
              type="button"
              className={`marketplace-mode-btn ${mode === 'joueur' ? 'active' : ''}`}
              onClick={() => setMode('joueur')}
            >
              Mode Joueur
            </button>
          </div>
        </div>
        <div className="marketplace-search-wrap">
          <Search size={18} strokeWidth={2} aria-hidden className="marketplace-search-icon" />
          <input
            type="search"
            className="marketplace-search"
            placeholder="Ex: Cherche BU finisseur, budget 3M..."
          />
        </div>
      </div>

      <div className="marketplace-summary">
        {summaryCards.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`marketplace-summary-card ${s.highlight ? `marketplace-summary-${s.highlight}` : ''}`}>
              <span className="marketplace-summary-icon">{Icon && <Icon size={20} strokeWidth={2} aria-hidden />}</span>
              <span className="marketplace-summary-label">{s.label}</span>
              <span className="marketplace-summary-value">{s.value}</span>
            </div>
          );
        })}
      </div>

      <div className="marketplace-player-card">
        <div className="marketplace-player-photo-wrap">
          <img
            src={`https://randomuser.me/api/portraits/men/${currentPlayer.avatarId}.jpg`}
            alt=""
            className="marketplace-player-photo"
          />
          <span className="marketplace-card-badge marketplace-card-urgent">
            <AlertCircle size={12} strokeWidth={2} aria-hidden /> URGENT
          </span>
          <span className="marketplace-card-badge marketplace-card-match">{currentPlayer.matchPercent}%</span>
        </div>
        <div className="marketplace-player-card-body">
        <h2 className="marketplace-player-name">{currentPlayer.name}</h2>
        <p className="marketplace-player-meta">{currentPlayer.position} • {currentPlayer.age} ans • {currentPlayer.club}</p>
        <div className="marketplace-match-desc">
          <Target size={16} strokeWidth={2} aria-hidden className="marketplace-match-icon" />
          {currentPlayer.matchDesc}
        </div>
        <div className="marketplace-strengths">
          <span className="marketplace-strengths-title">POINTS FORTS</span>
          <div className="marketplace-strengths-tags">
            {currentPlayer.strengths.map((s) => (
              <span key={s} className="marketplace-strength-tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="marketplace-value-row">
          <span className="marketplace-value-label">Valeur</span>
          <span className="marketplace-value-amount">{currentPlayer.value}</span>
        </div>
        <div className="marketplace-card-actions">
          <button type="button" className="marketplace-btn-skip"><X size={18} strokeWidth={2} aria-hidden /> Passer</button>
          <button type="button" className="marketplace-btn-match"><Heart size={18} strokeWidth={2} aria-hidden /> Match!</button>
        </div>
        </div>
      </div>

      <section className="marketplace-flash">
        <h3 className="marketplace-flash-title">
          <span className="marketplace-flash-title-icon"><AlertCircle size={16} strokeWidth={2} aria-hidden /></span>
          Opportunités Flash
        </h3>
        <div className="marketplace-flash-card">
          <div className="marketplace-flash-urgency">
            <span className="marketplace-flash-urgency-icon"><AlertCircle size={14} strokeWidth={2.5} aria-hidden /></span>
            Urgence : Montpellier cherche un DC
          </div>
          <p className="marketplace-flash-detail">Blessure longue durée du titulaire. Budget : 1.5-2M€</p>
          <Link to="/portefeuille-joueurs" className="marketplace-flash-link">Proposer João Silva <ChevronRight size={16} strokeWidth={2} aria-hidden /></Link>
        </div>
      </section>
    </div>
  );
}
