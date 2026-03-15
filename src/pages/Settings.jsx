import { useState } from 'react';
import { Settings as SettingsIcon, EyeOff, Lock, Download, Crown } from '../components/Icons';
import './Settings.css';

const tabs = ['Profil', 'Confidentialité', 'Notifications', 'Apparence'];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Confidentialité');
  const [profilePublic, setProfilePublic] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [appearInSearch, setAppearInSearch] = useState(true);

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1 className="settings-title">
          <span className="settings-title-icon"><SettingsIcon size={24} strokeWidth={2} aria-hidden /></span>
          Paramètres
        </h1>
        <p className="settings-subtitle">Gérez votre compte et vos préférences</p>
      </header>

      <div className="settings-tabs">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            className={`settings-tab ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {activeTab === 'Confidentialité' && (
        <>
          <section className="settings-card settings-card-invisible">
            <div className="settings-card-header">
              <span className="settings-card-icon settings-icon-invisible"><EyeOff size={22} strokeWidth={2} aria-hidden /></span>
              <div>
                <h2 className="settings-card-title">
                  Mode Invisible
                  <span className="settings-premium-tag">Premium</span>
                </h2>
                <p className="settings-card-desc">Visitez les profils sans être détecté</p>
              </div>
              <label className="settings-toggle settings-toggle-disabled">
                <input type="checkbox" disabled />
                <span className="settings-toggle-slider" />
              </label>
            </div>
            <div className="settings-how-it-works">
              <h3>Comment ça marche ?</h3>
              <p>Lorsque le Mode Invisible est activé, vous pouvez consulter les profils d'autres utilisateurs sans apparaître dans leur liste de visiteurs. Idéal pour mener vos recherches en toute discrétion et garder vos stratégies de recrutement confidentielles.</p>
              <ul className="settings-modes-list">
                <li><strong>Mode Visible:</strong> Vos visites sont enregistrées et visibles</li>
                <li><strong>Mode Invisible:</strong> Vous naviguez sans laisser de trace</li>
              </ul>
            </div>
            <button type="button" className="settings-btn-unlock"><Crown size={18} strokeWidth={2} aria-hidden /> Débloquer le Mode Invisible</button>
          </section>

          <section className="settings-card">
            <h2 className="settings-card-title">Visibilité du Profil</h2>
            <p className="settings-card-desc">Contrôlez qui peut voir votre profil et vos informations</p>
            <div className="settings-toggle-row">
              <div>
                <span className="settings-toggle-label">Profil Public</span>
                <span className="settings-toggle-sublabel">Votre profil est visible par tous les utilisateurs</span>
              </div>
              <label className="settings-toggle">
                <input type="checkbox" checked={profilePublic} onChange={(e) => setProfilePublic(e.target.checked)} />
                <span className="settings-toggle-slider" />
              </label>
            </div>
            <div className="settings-toggle-row">
              <div>
                <span className="settings-toggle-label">Afficher mon Portefeuille</span>
                <span className="settings-toggle-sublabel">Les autres peuvent voir vos joueurs</span>
              </div>
              <label className="settings-toggle">
                <input type="checkbox" checked={showPortfolio} onChange={(e) => setShowPortfolio(e.target.checked)} />
                <span className="settings-toggle-slider" />
              </label>
            </div>
            <div className="settings-toggle-row">
              <div>
                <span className="settings-toggle-label">Apparaître dans les Recherches</span>
                <span className="settings-toggle-sublabel">Votre profil peut être trouvé via la recherche</span>
              </div>
              <label className="settings-toggle">
                <input type="checkbox" checked={appearInSearch} onChange={(e) => setAppearInSearch(e.target.checked)} />
                <span className="settings-toggle-slider" />
              </label>
            </div>
          </section>
        </>
      )}

      <section className="settings-card">
        <h2 className="settings-card-title">Données & Sécurité</h2>
        <p className="settings-card-desc">Gérez vos données personnelles et la sécurité de votre compte</p>
        <div className="settings-actions-list">
          <button type="button" className="settings-action-btn">
            <span className="settings-action-icon"><Lock size={18} strokeWidth={2} aria-hidden /></span>
            Changer le mot de passe
          </button>
          <button type="button" className="settings-action-btn">
            <span className="settings-action-icon"><Download size={18} strokeWidth={2} aria-hidden /></span>
            Télécharger mes données
          </button>
          <button type="button" className="settings-action-btn settings-action-danger">
            <span className="settings-action-icon"><Lock size={18} strokeWidth={2} aria-hidden /></span>
            Supprimer mon compte
          </button>
        </div>
      </section>
    </div>
  );
}
