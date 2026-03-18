import React, { useState } from 'react';
import { Eye, Check, Clock, FileText, Search, TrendingUp } from '../components/Icons';
import PlayerProfileModal from '../components/PlayerProfileModal';
import './Scouting.css';

const stats = [
  { label: 'À Voir', value: 2, icon: Eye, highlight: null },
  { label: 'Top Cibles', value: 1, icon: Check, highlight: 'green' },
  { label: 'À Suivre', value: 1, icon: Clock, highlight: 'orange' },
  { label: 'Évalués', value: 3, icon: TrendingUp, highlight: null },
];

const aVoir = [
  { name: 'Kylian Mbappé Jr.', position: 'Attaquant', age: 17, club: 'Paris FC U19', league: 'Ligue 2', potential: '18/20', potentialHigh: true, value: '3-5M€', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Cristiano Jr.', position: 'Ailier droit', age: 16, club: 'Sporting CP U17', league: 'Liga Portugal', potential: '15/20', potentialHigh: false, value: '1-2M€', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

const vuRapporte = [
  { name: 'Erling Haaland II', position: 'Avant-centre', age: 19, club: 'Molde FK', league: 'Eliteserien', potential: '16/20', potentialHigh: true, value: '2-4M€', tag: 'Top Cible', tagType: 'green', reportSummary: 'Rapport: Joueur prêt pour la L1, profil box-to-box. Excellent timing et finition.', date: '25/02/2026', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { name: 'Lionel Messi Jr.', position: 'Milieu offensif', age: 16, club: "Newell's Old Boys", league: 'Primera División', potential: '14/20', potentialHigh: false, value: '500K-1M€', tag: 'À Suivre', tagType: 'orange', date: '20/02/2026', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { name: 'Jude Bellingham Jr.', position: 'Milieu central', age: 17, club: 'Birmingham City U18', league: 'Championship', potential: '17/20', potentialHigh: true, value: '1,5-3M€', date: '18/02/2026', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
];

function filterBySearch(list, query) {
  if (!query.trim()) return list;
  const q = query.trim().toLowerCase();
  return list.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.club && p.club.toLowerCase().includes(q)) ||
      (p.league && p.league.toLowerCase().includes(q)) ||
      (p.position && p.position.toLowerCase().includes(q))
  );
}

export default function Scouting() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [profilePlayer, setProfilePlayer] = useState(null);

  const aVoirFiltered = filterBySearch(aVoir, searchQuery);
  const vuRapporteFiltered = filterBySearch(vuRapporte, searchQuery);

  const showAVoir = filter === 'all' || filter === 'À Voir';
  const showVuRapporte = filter === 'all' || filter === 'Évalués';

  const openProfile = (player) => {
    setProfilePlayer(player);
  };

  return (
    <div className="scouting-page">
      <div className="scouting-stats">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
          <div key={s.label} className={`scouting-stat-card ${s.highlight ? `scouting-stat-${s.highlight}` : ''}`}>
            <span className="scouting-stat-icon">{Icon && <Icon size={18} strokeWidth={2} aria-hidden />}</span>
            <span className="scouting-stat-label">{s.label}</span>
            <span className="scouting-stat-value">{s.value}</span>
          </div>
          );
        })}
      </div>

      <div className="scouting-toolbar">
        <div className="search-wrap">
          <span className="search-icon"><Search size={18} strokeWidth={2} aria-hidden /></span>
          <input
            type="search"
            placeholder="Rechercher une cible..."
            className="toolbar-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          {['Tous', 'À Voir', 'Évalués'].map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${filter === (f === 'Tous' ? 'all' : f) ? 'active' : ''}`}
              onClick={() => setFilter(f === 'Tous' ? 'all' : f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {showAVoir && (
      <section className="scouting-group">
        <div className="scouting-section-box">
          <div className="scouting-section-header">
            <Eye size={18} strokeWidth={2} className="scouting-section-icon scouting-section-icon-voir" aria-hidden />
            <h3 className="scouting-section-title">
              <span className="scouting-section-title-main">À Voir</span>
              <span className="scouting-section-title-count"> ({aVoirFiltered.length} joueur(s))</span>
            </h3>
          </div>
          <div className="scouting-section-divider" />
          <div className="scouting-player-list">
            {aVoirFiltered.map((p, i) => (
              <React.Fragment key={p.name}>
                {i > 0 && <div className="scouting-section-divider" />}
                <div className="scouting-player-row">
                  <div className="scouting-col scouting-col-identity">
                    {p.avatar ? (
                      <img src={p.avatar} alt="" className="scouting-player-avatar" />
                    ) : (
                      <div className="scouting-player-avatar" />
                    )}
                    <div className="scouting-identity-text">
                      <div className="scouting-player-name">{p.name}</div>
                      <div className="scouting-player-meta">{p.position} • {p.age} ans</div>
                    </div>
                  </div>
                  <div className="scouting-col scouting-col-club">
                    <div className="scouting-player-club">{p.club}</div>
                    <div className="scouting-player-league">{p.league}</div>
                  </div>
                  <div className="scouting-col scouting-col-potential">
                    <div className="scouting-player-potential-wrap">
                      <span className={`scouting-player-potential ${p.potentialHigh ? 'potential-high' : 'potential-mid'}`}>{p.potential}</span>
                    </div>
                  </div>
                  <div className="scouting-col scouting-col-value">
                    <div className="scouting-player-value">{p.value}</div>
                  </div>
                  <div className="scouting-col scouting-col-actions">
                    <button type="button" className="btn-scout btn-voir-profil" onClick={() => openProfile(p)}>Voir Profil</button>
                    <button type="button" className="btn-scout btn-creer-rapport">Créer rapport</button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      )}

      {showVuRapporte && (
      <section className="scouting-group">
        <div className="scouting-section-box">
          <div className="scouting-section-header">
            <FileText size={18} strokeWidth={2} className="scouting-section-icon scouting-section-icon-rapporte" aria-hidden />
            <h3 className="scouting-section-title">
              <span className="scouting-section-title-main">Vu / Rapporté</span>
              <span className="scouting-section-title-count"> ({vuRapporteFiltered.length} joueur(s))</span>
            </h3>
          </div>
          <div className="scouting-section-divider" />
          <div className="scouting-player-list">
            {vuRapporteFiltered.map((p, i) => (
              <React.Fragment key={p.name}>
                {i > 0 && <div className="scouting-section-divider" />}
                <div className="scouting-player-row scouting-player-row-with-report">
                  <div className="scouting-col scouting-col-identity">
                    {p.avatar ? (
                      <img src={p.avatar} alt="" className="scouting-player-avatar" />
                    ) : (
                      <div className="scouting-player-avatar" />
                    )}
                    <div className="scouting-identity-text">
                      <div className="scouting-player-name">{p.name}</div>
                      <div className="scouting-player-meta">{p.position} • {p.age} ans</div>
                    </div>
                  </div>
                  <div className="scouting-col scouting-col-club">
                    <div className="scouting-player-club">{p.club}</div>
                    <div className="scouting-player-league">{p.league}</div>
                  </div>
                  <div className="scouting-col scouting-col-potential">
                    <div className="scouting-player-potential-wrap">
                      <span className={`scouting-player-potential ${p.potentialHigh ? 'potential-high' : 'potential-mid'}`}>{p.potential}</span>
                    </div>
                    {p.tag && (() => {
                      const parts = p.tag.split(/\s+/);
                      const firstWord = parts[0] || '';
                      const restText = parts.slice(1).join(' ');
                      return (
                        <span className={`scouting-tag scouting-tag-${p.tagType}`}>
                          {p.tagType === 'green' && <span className="scouting-tag-circle scouting-tag-circle-green" aria-hidden />}
                          {p.tagType === 'orange' && <span className="scouting-tag-circle scouting-tag-circle-orange" aria-hidden />}
                          {p.tagType === 'green' ? (
                            <span className="scouting-tag-text">{p.tag}</span>
                          ) : (
                            <>
                              <span className="scouting-tag-word-first">{firstWord}</span>
                              {restText && <span className="scouting-tag-word-rest"> {restText}</span>}
                            </>
                          )}
                        </span>
                      );
                    })()}
                  </div>
                  <div className="scouting-col scouting-col-value">
                    <div className="scouting-player-value">{p.value}</div>
                  </div>
                  <div className="scouting-col scouting-col-actions">
                    <button type="button" className="btn-scout btn-voir-profil" onClick={() => openProfile(p)}>Voir Profil</button>
                    <button type="button" className="btn-scout btn-voir-rapport">Voir rapport</button>
                    {p.date && <span className="scouting-date">{p.date}</span>}
                  </div>
                  {p.reportSummary && (
                    <div className="scouting-report-row">
                      <div className="scouting-report-box">
                        <span className="scouting-report-prefix">Rapport:</span> {p.reportSummary.replace(/^Rapport:\s*/i, '')}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      )}

      <PlayerProfileModal
        isOpen={!!profilePlayer}
        player={profilePlayer}
        onClose={() => setProfilePlayer(null)}
      />
    </div>
  );
}
