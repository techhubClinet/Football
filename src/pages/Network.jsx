import { useState } from 'react';
import { Camera, Video, Link2, Play } from 'lucide-react';
import { Check, Heart, MessageCircle, Share2, FileText, MapPin, Users, UserPlus, TrendingUp, Building2, Trophy } from '../components/Icons';
import './Network.css';

const mediaTabs = [
  { id: 'Photo', icon: Camera },
  { id: 'Vidéo', icon: Video },
  { id: 'Document', icon: FileText },
];

const composerAvatar = null;
const composerInitials = 'JD';

const posts = [
  { author: 'Real Madrid CF', badge: 'Club Professionnel', verified: true, linkIcon: true, time: 'Il y a 2h', content: 'Recherche active : Milieu défensif (U21) - Profil international recherché pour notre centre de formation. Budget : 2-3M€. Contactez-nous avec vos dossiers.', hashtags: ['#Recrutement', '#U21', '#Milieu'], likes: 342, comments: 87, shares: 45, ctaLabel: 'Proposer un dossier', avatar: 'https://picsum.photos/seed/realmadrid/100/100' },
  { author: 'FIFA Updates', badge: 'Actualité Réglementaire', verified: true, time: 'Il y a 5h', content: 'Nouvelle réglementation FIFA : Les agents devront désormais renouveler leurs mandats avec une période de préavis de 6 mois minimum avant expiration. Mise en application le 1er juin 2026.', hashtags: ['#Réglementation', '#FIFA', '#Mandats'], likes: 0, comments: 0, shares: 0, hasImage: true, avatar: 'https://picsum.photos/seed/fifa/100/100' },
  { author: 'Alexandre Dubois', badge: 'Agent FIFA', verified: true, fifaTag: true, time: 'Il y a 1j', content: "Fier d'annoncer le transfert de mon joueur Karim B. vers le Championnat anglais! 👋 La persévérance paie toujours. #AgentLife #TransferWindow", hashtags: ['#Transfert', '#Success Story'], likes: 892, comments: 145, shares: 234, hasVideo: true, avatar: 'https://picsum.photos/seed/alexandre/100/100' },
  { author: 'FC Lyon Académie', badge: 'Centre de Formation', verified: true, trophyIcon: true, time: 'Il y a 2j', content: '📍 Journée de détection ouverte le 15 mars 2026 ! Joueurs nés en 2010-2012, inscrivez-vous dès maintenant. Places limitées.', hashtags: ['#Détection', '#Formation', '#U16'], likes: 567, comments: 98, shares: 123, hasImage: true, ctaLabel: 'Proposer un dossier', avatar: 'https://picsum.photos/seed/lyonacademy/100/100' },
];

const connectionRequests = [
  { name: 'Sophie Martin', role: 'Intermédiaire', location: 'Paris, France', common: 12, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', verified: true },
  { name: 'Manchester United Academy', role: 'Club Professionnel', location: 'Manchester, UK', common: 34, avatar: 'https://picsum.photos/seed/manutd/100/100', verified: true, clubIcon: true },
  { name: 'Carlos Rodriguez', role: 'Agent FIFA', location: 'Madrid, Espagne', common: 8, avatar: 'https://randomuser.me/api/portraits/men/55.jpg', verified: true, fifaTag: true },
];
const connectionRequestsCount = 4;

const suggestions = [
  { name: 'Emma Leclerc', role: 'Scout Indépendant', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
];

export default function Network() {
  const [activeMediaTab, setActiveMediaTab] = useState('Photo');

  return (
    <div className="network-page">
      <div className="network-layout">
        <div className="network-feed">
          <div className="network-composer">
            {composerAvatar ? (
              <img src={composerAvatar} alt="" className="network-composer-avatar" />
            ) : (
              <div className="network-composer-avatar network-composer-avatar-initials" aria-hidden>
                {composerInitials}
              </div>
            )}
            <div className="network-composer-body">
              <div className="network-composer-inputWrap">
                <textarea className="network-composer-input" placeholder="Partager une actualité, une opportunité..." rows={2} />
              </div>
              <div className="network-composer-actions">
                {mediaTabs.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button key={t.id} type="button" className={`network-media-btn ${activeMediaTab === t.id ? 'active' : ''}`} onClick={() => setActiveMediaTab(t.id)}>
                      <Icon size={18} strokeWidth={2} aria-hidden /> {t.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="network-feed-header">
            <span className="network-feed-title">Publications</span>
            <span className="network-feed-count">23</span>
          </div>

          {posts.map((p, i) => (
            <article key={i} className="network-post">
              <div className="network-post-header">
                {p.avatar ? <img src={p.avatar} alt="" className="network-post-avatar" /> : <div className="network-post-avatar" />}
                <div className="network-post-author-info">
                  <div className="network-post-author-row">
                    <span className="network-post-author">
                      {p.author}
                      {p.verified && <span className="network-verified"><Check size={14} strokeWidth={2.5} aria-hidden /></span>}
                      {p.linkIcon && <span className="network-link-icon"><Link2 size={14} strokeWidth={2} aria-hidden /></span>}
                      {p.fifaTag && <span className="network-post-fifa-tag">FIFA</span>}
                      {p.trophyIcon && <span className="network-post-trophy"><Trophy size={14} strokeWidth={2} aria-hidden /></span>}
                    </span>
                    <span className="network-post-time">{p.time}</span>
                  </div>
                  <span className="network-post-meta">{p.badge}</span>
                </div>
              </div>
              <p className="network-post-content">{p.content}</p>
              {p.hasVideo && (
                <div className="network-post-video">
                  <img src="https://picsum.photos/seed/football-match/800/450" alt="" />
                  <button type="button" className="network-post-play" aria-label="Lire la vidéo">
                    <Play size={48} strokeWidth={2} fill="currentColor" aria-hidden />
                  </button>
                </div>
              )}
              {p.hasImage && !p.hasVideo && (
                <div className="network-post-image">
                  <img src={p.author.includes('FC Lyon') ? 'https://picsum.photos/seed/lyon-event/800/400' : 'https://picsum.photos/seed/fifa-reg/800/400'} alt="" />
                </div>
              )}
              <div className="network-post-hashtags">
                {p.hashtags.map((h) => (
                  <span key={h} className="network-hashtag">{h}</span>
                ))}
              </div>
              {(p.likes > 0 || p.comments > 0 || p.shares > 0) && (
                <div className="network-post-engagement">
                  <span>{p.likes} mentions J'aime</span>
                  <span>{p.comments} commentaires</span>
                  <span>{p.shares} partages</span>
                </div>
              )}
              <div className="network-post-actions">
                <button type="button" className="network-action-btn"><Heart size={16} strokeWidth={2} aria-hidden /> J'aime</button>
                <button type="button" className="network-action-btn"><MessageCircle size={16} strokeWidth={2} aria-hidden /> Commenter</button>
                <button type="button" className="network-action-btn"><Share2 size={16} strokeWidth={2} aria-hidden /> Partager</button>
                {p.ctaLabel && (
                  <button type="button" className="network-action-btn network-action-primary">{p.ctaLabel}</button>
                )}
              </div>
            </article>
          ))}
          <div className="network-load-more-wrap">
            <a href="#" className="network-load-more">Charger plus de publications</a>
          </div>
        </div>

        <aside className="network-sidebar">
          <section className="network-sidebar-section network-requests-section">
            <h3 className="network-sidebar-title">
              <span className="network-sidebar-title-icon network-sidebar-title-icon-purple"><UserPlus size={18} strokeWidth={2} aria-hidden /></span>
              Demandes de connexion
            </h3>
            <p className="network-sidebar-subtitle">{connectionRequestsCount} nouvelles demandes</p>
            <div className="network-sidebar-divider" />
            {connectionRequests.map((r) => (
              <div key={r.name} className="network-request-card">
                <div className="network-request-top">
                  {r.avatar ? <img src={r.avatar} alt="" className="network-request-avatar" /> : <div className="network-request-avatar" />}
                  <div className="network-request-heading">
                    <span className="network-request-name">
                      {r.name}
                      {r.verified && <span className="network-request-verified"><Check size={12} strokeWidth={2.5} aria-hidden /></span>}
                      {r.clubIcon && <span className="network-request-badge"><Building2 size={12} strokeWidth={2} aria-hidden /></span>}
                      {r.fifaTag && <span className="network-request-fifa-tag">FIFA</span>}
                    </span>
                    <span className="network-request-role">{r.role}</span>
                  </div>
                </div>
                <span className="network-request-meta">
                  <MapPin size={14} strokeWidth={2} aria-hidden /> {r.location}
                </span>
                <span className="network-request-common">
                  <Users size={14} strokeWidth={2} aria-hidden /> {r.common} relations en commun
                </span>
                <div className="network-request-actions">
                  <button type="button" className="btn-accept">Accepter</button>
                  <button type="button" className="btn-ignore">Ignorer</button>
                </div>
              </div>
            ))}
            <a href="#" className="network-sidebar-link">Voir toutes les demandes</a>
          </section>
          <section className="network-sidebar-section network-suggestions-section">
            <h3 className="network-sidebar-title">
              <span className="network-sidebar-title-icon network-sidebar-title-icon-green"><TrendingUp size={18} strokeWidth={2} aria-hidden /></span>
              Suggestions
            </h3>
            <div className="network-sidebar-divider" />
            {suggestions.map((s) => (
              <div key={s.name} className="network-suggestion-card">
                {s.avatar ? <img src={s.avatar} alt="" className="network-suggestion-avatar" /> : <div className="network-suggestion-avatar" />}
                <div className="network-suggestion-info">
                  <span className="network-suggestion-name">{s.name}</span>
                  <span className="network-suggestion-role">{s.role}</span>
                </div>
                <button type="button" className="btn-connect">Se connecter</button>
              </div>
            ))}
          </section>
          <section className="network-sidebar-section network-votre-reseau-section">
            <h3 className="network-sidebar-title">Votre réseau</h3>
            <div className="network-stats-list">
              <div className="network-stat-row">
                <span className="network-stat-label">Connexions</span>
                <span className="network-stat-value">342</span>
              </div>
              <div className="network-stat-row">
                <span className="network-stat-label">Vues de profil</span>
                <span className="network-stat-value network-stat-value-green">+67</span>
              </div>
              <div className="network-stat-row">
                <span className="network-stat-label">Publications</span>
                <span className="network-stat-value">23</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
