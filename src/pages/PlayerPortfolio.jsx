import { useState, useRef, useEffect } from 'react';
import { Search, AlertTriangle, DollarSign, Calendar, MapPin, ArrowLeftRight, ChevronDown, Check } from '../components/Icons';
import './PlayerPortfolio.css';

const portfolioStats = [
  { label: 'Valeur Totale', value: '6.8M€', icon: DollarSign },
  { label: 'Joueurs Actifs', value: '5', icon: Calendar },
  { label: 'Ligues', value: '4', icon: MapPin },
  { label: 'Mandats M-6', value: '2', alert: true, icon: AlertTriangle },
];

const allPlayers = [
  { name: 'Thomas Müller', position: 'Milieu offensif', age: 22, club: 'Borussia Dortmund II', league: 'Bundesliga', country: 'DE', value: '2.50M€', valueNum: 2.5, contract: '30/06/2028', contractDate: '2028-06-30', status: 'Actif', tags: [], avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'João Silva', position: 'Défenseur central', age: 20, club: 'Sporting CP B', league: 'Liga Portugal', country: 'PT', value: '1.80M€', valueNum: 1.8, contract: '30/06/2027', contractDate: '2027-06-30', status: 'Prêt', tags: [], avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
  { name: 'Karim Benzema Jr.', position: 'Attaquant', age: 19, club: 'OL Réserve', league: 'Ligue 1', country: 'FR', value: '1.20M€', valueNum: 1.2, contract: '30/06/2026', contractDate: '2026-06-30', status: 'Actif', tags: ['M-6'], avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Lucas Fernandez', position: 'Milieu', age: 21, club: 'FC Nantes', league: 'Ligue 1', country: 'FR', value: '0.85M€', valueNum: 0.85, contract: '30/06/2027', contractDate: '2027-06-30', status: 'En transfert', tags: [], avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Mohamed Salah', position: 'Ailier', age: 18, club: 'Libre', league: 'N/A', country: null, value: '0.45M€', valueNum: 0.45, contract: 'N/A', contractDate: '', status: 'Libre', tags: ['M-6'], avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
];

function getValueRange(valueNum) {
  if (valueNum >= 1) return '1M - 10M CHF';
  if (valueNum >= 0.1) return '100K - 1M CHF';
  return '< 100K CHF';
}

function groupPlayers(players, filterMode) {
  if (filterMode === 'value') {
    const groups = {};
    players.forEach((p) => {
      const range = getValueRange(p.valueNum);
      if (!groups[range]) groups[range] = [];
      groups[range].push(p);
    });
    const order = ['1M - 10M CHF', '100K - 1M CHF', '< 100K CHF'];
    return order.filter((r) => groups[r]?.length).map((range) => ({ range, count: groups[range].length, players: groups[range] }));
  }
  if (filterMode === 'division') {
    const groups = {};
    players.forEach((p) => {
      const key = p.league || 'N/A';
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([range, list]) => ({ range, count: list.length, players: list }));
  }
  if (filterMode === 'geo') {
    const labels = { DE: 'Allemagne', PT: 'Portugal', FR: 'France' };
    const groups = {};
    players.forEach((p) => {
      const key = p.country || 'Libre';
      const label = labels[key] || key;
      if (!groups[label]) groups[label] = [];
      groups[label].push(p);
    });
    const order = ['Allemagne', 'France', 'Portugal', 'Libre'];
    return order.filter((r) => groups[r]?.length).map((range) => ({ range, count: groups[range].length, players: groups[range] }));
  }
  return [{ range: 'Tous', count: players.length, players }];
}

const SORT_OPTIONS = [
  { value: 'Valeur', label: 'Trier par Valeur' },
  { value: 'Nom', label: 'Trier par Nom' },
  { value: 'Âge', label: 'Trier par Âge' },
];

function sortPlayers(players, sortBy) {
  const list = [...players];
  if (sortBy === 'Valeur') list.sort((a, b) => (b.valueNum ?? 0) - (a.valueNum ?? 0));
  else if (sortBy === 'Nom') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === 'Âge') list.sort((a, b) => (a.age ?? 0) - (b.age ?? 0));
  else if (sortBy === 'Contrat') list.sort((a, b) => (a.contractDate || '').localeCompare(b.contractDate || ''));
  return list;
}

const countryFlags = { DE: '🇩🇪', PT: '🇵🇹', FR: '🇫🇷' };

function PlayerCard({ player }) {
  const statusClass = player.status.toLowerCase().replace(' ', '-');
  return (
    <div className="player-card">
      <div className="player-card-dp-name">
        <div className="player-card-avatar-wrap">
          {player.avatar ? (
            <img src={player.avatar} alt="" className="player-card-avatar" />
          ) : (
            <div className="player-card-avatar" />
          )}
        </div>
        <div className="player-card-info">
          <div className="player-card-name">{player.name}</div>
          <div className="player-card-meta">{player.position} • {player.age} ans</div>
        </div>
      </div>
      <div className="player-card-club-block">
        <div className="player-card-club">
          {player.country && <span className="player-card-flag">{countryFlags[player.country]}</span>}
          {player.club}
        </div>
        <div className="player-card-league">{player.league}</div>
      </div>
      <div className="player-card-value-block">
        <span className="player-value">{player.value}</span>
        <span className="player-value-label">Valeur</span>
      </div>
      <div className="player-card-contract-block">
        <span className="player-contract-date">{player.contract}</span>
        <span className="player-contract-label">Fin contrat</span>
      </div>
      <div className="player-card-right">
        <div className="player-tags">
          <span className={`tag tag-${statusClass}`}>{player.status}</span>
          {player.tags.map((t) => (
            <span key={t} className="tag tag-m6">{t}</span>
          ))}
        </div>
        <button type="button" className="btn-compare">
          <ArrowLeftRight size={16} strokeWidth={2} aria-hidden />
          Comparer
        </button>
      </div>
    </div>
  );
}

export default function PlayerPortfolio() {
  const [filter, setFilter] = useState('value');
  const [sortBy, setSortBy] = useState('Valeur');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredPlayers = searchQuery.trim()
    ? allPlayers.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.club && p.club.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (p.league && p.league.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (p.position && p.position.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : allPlayers;

  const sortedPlayers = sortPlayers(filteredPlayers, sortBy);
  const playersByGroup = groupPlayers(sortedPlayers, filter);

  return (
    <div className="player-portfolio">
      <div className="stats-row">
        {portfolioStats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`stat-card ${s.alert ? 'stat-card-alert' : ''}`}>
              <span className={`stat-card-icon ${s.alert ? 'stat-card-icon-alert' : ''}`}>
                <Icon size={20} strokeWidth={2} aria-hidden />
              </span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-value">{s.value}</span>
            </div>
          );
        })}
      </div>

      <div className="toolbar">
        <div className="search-wrap">
          <span className="search-icon"><Search size={18} strokeWidth={2} aria-hidden /></span>
          <input
            type="search"
            placeholder="Rechercher un joueur..."
            className="toolbar-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          {['value', 'division', 'geo'].map((key) => (
            <button
              key={key}
              type="button"
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {key === 'value' && 'Par Valeur'}
              {key === 'division' && 'Par Division'}
              {key === 'geo' && 'Par Géo'}
            </button>
          ))}
        </div>
        <div className={`sort-wrap ${sortOpen ? 'is-open' : ''}`} ref={sortRef}>
          <button
            type="button"
            className="sort-select"
            onClick={() => setSortOpen((o) => !o)}
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
          >
            Trier par {SORT_OPTIONS.find((o) => o.value === sortBy)?.label?.replace('Trier par ', '') ?? sortBy}
            <ChevronDown size={16} strokeWidth={2} className="sort-chevron" aria-hidden />
          </button>
          {sortOpen && (
            <div className="sort-popover" role="listbox">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={sortBy === opt.value}
                  className={`sort-popover-option ${sortBy === opt.value ? 'selected' : ''}`}
                  onClick={() => {
                    setSortBy(opt.value);
                    setSortOpen(false);
                  }}
                >
                  {opt.label}
                  {sortBy === opt.value && <Check size={16} strokeWidth={2.5} aria-hidden />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {playersByGroup.length === 0 ? (
        <p className="player-portfolio-empty">Aucun joueur trouvé.</p>
      ) : (
        playersByGroup.map((group) => (
          <section key={group.range} className="player-group">
            <h3 className="group-title">
              <span className="group-title-range">{group.range}</span>
              <span className="group-title-count">({group.count} joueur(s))</span>
            </h3>
            <div className="player-list">
              {group.players.map((p) => (
                <PlayerCard key={p.name} player={p} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
