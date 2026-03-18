import { useState } from 'react';
import { MapPin, DollarSign, Building2, Info, Trophy, ArrowLeftRight, Calendar, Filter, ChevronDown } from '../components/Icons';
import './MercatoMap.css';

const stats = [
  { label: 'Offres Reçues', value: '2', highlight: 'orange', icon: DollarSign },
  { label: 'Intérêts Clubs', value: '1', highlight: 'blue', icon: Building2 },
  { label: 'Sources Directes', value: '2', highlight: 'green', icon: Info },
  { label: 'Pays Actifs', value: '3', icon: MapPin },
];

const countries = [
  { name: 'France', count: 1, type: 'offres', active: false },   // gold pin
  { name: 'Portugal', count: 1, type: 'offres', active: true },  // gold pin + purple glow
  { name: 'Allemagne', count: 1, type: 'interets', active: false }, // blue pin, outline
];

const offres = [
  { name: 'Lucas Fernandez', club: 'FC Porto', location: 'Portugal', date: '27/02/2026', value: '1.2M€', tag: 'Direct Club' },
  { name: 'João Silva', club: 'AS Monaco', location: 'France', date: '25/02/2026', value: '2.5M€', tag: 'Direct Club' },
];

const interets = [
  { name: 'Karim Benzema Jr.', club: 'Borussia Dortmund', location: 'Allemagne', date: '26/02/2026', tag: 'Intermédiaire' },
];

export default function MercatoMap() {
  const [filter, setFilter] = useState('all');

  const showOffres = filter === 'all' || filter === 'offres';
  const showInterets = filter === 'all' || filter === 'interets';

  return (
    <div className="mercato-page">
      <div className="mercato-stats">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`mercato-stat-card ${s.highlight ? `mercato-stat-${s.highlight}` : ''}`}>
              {Icon && <span className="mercato-stat-icon"><Icon size={18} strokeWidth={2} aria-hidden /></span>}
              <span className="mercato-stat-label">{s.label}</span>
              <span className="mercato-stat-value">{s.value}</span>
            </div>
          );
        })}
      </div>

      <div className="mercato-filters">
        <span className="mercato-filters-label">
          <Filter size={16} strokeWidth={2} aria-hidden /> Filtres:
        </span>
        <div className="mercato-filter-buttons">
          <button type="button" className={`mercato-filter-btn ${filter === 'all' ? 'mercato-filter-btn-active' : ''}`} onClick={() => setFilter('all')}>Tous</button>
          <button type="button" className={`mercato-filter-btn ${filter === 'offres' ? 'mercato-filter-btn-active' : ''}`} onClick={() => setFilter('offres')}>
            <Trophy size={14} strokeWidth={2} aria-hidden /> Offres
          </button>
          <button type="button" className={`mercato-filter-btn ${filter === 'interets' ? 'mercato-filter-btn-active' : ''}`} onClick={() => setFilter('interets')}>
            <ArrowLeftRight size={14} strokeWidth={2} aria-hidden /> Intérêts
          </button>
          <div className="mercato-source-dropdown">
            <span>Toutes les sources</span>
            <ChevronDown size={16} strokeWidth={2} aria-hidden />
          </div>
        </div>
      </div>

      <section className="mercato-map-section">
        <div className="mercato-map-header">
          <h3 className="mercato-map-title">Carte Mercato Europe</h3>
          <div className="mercato-map-legend">
            <span><span className="mercato-legend-dot mercato-legend-orange" aria-hidden /> Offres</span>
            <span><span className="mercato-legend-dot mercato-legend-blue" aria-hidden /> Intérêts</span>
          </div>
        </div>
        <div className="mercato-map-pins">
          {countries.map((c) => (
            <div key={c.name} className={`mercato-pin mercato-pin-${c.type} ${c.active ? 'mercato-pin-active' : ''}`}>
              <span className="mercato-pin-circle">
                <MapPin size={38} strokeWidth={2} fill="none" stroke="currentColor" aria-hidden />
              </span>
              <span className={`mercato-flag mercato-flag-${c.name.toLowerCase().replace(' ', '-')}`} aria-hidden />
              <span className="mercato-pin-name">{c.name}</span>
              <span className="mercato-pin-count">{c.count} activité(s)</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mercato-columns">
        {showOffres && (
        <section className="mercato-column mercato-column-orange">
          <h3 className="mercato-column-title mercato-column-title-orange">
            <DollarSign size={18} strokeWidth={2} aria-hidden />
            $ Offres Reçues ({offres.length})
          </h3>
          <div className="mercato-entry-list">
            {offres.map((o) => (
              <div key={o.name} className="mercato-entry">
                <div className="mercato-entry-main">
                  <div className="mercato-entry-row1">
                    <span className="mercato-entry-name">{o.name}</span>
                    <span className="mercato-entry-value">{o.value}</span>
                  </div>
                  <div className="mercato-entry-row2">
                    <span className="mercato-entry-club"><Building2 size={14} strokeWidth={2} aria-hidden /> {o.club}</span>
                    <span className="mercato-entry-meta"><MapPin size={14} strokeWidth={2} aria-hidden /> {o.location} <Calendar size={14} strokeWidth={2} aria-hidden /> {o.date}</span>
                  </div>
                  <div className="mercato-entry-row3">
                    <span className="mercato-entry-tag mercato-tag-green">{o.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}
        {showInterets && (
        <section className="mercato-column mercato-column-blue">
          <h3 className="mercato-column-title mercato-column-title-blue">
            <Building2 size={18} strokeWidth={2} aria-hidden />
            Intérêts Clubs ({interets.length})
          </h3>
          <div className="mercato-entry-list">
            {interets.map((i) => (
              <div key={i.name} className="mercato-entry">
                <div className="mercato-entry-main">
                  <div className="mercato-entry-row1">
                    <span className="mercato-entry-name">{i.name}</span>
                  </div>
                  <div className="mercato-entry-row2">
                    <span className="mercato-entry-club"><Building2 size={14} strokeWidth={2} aria-hidden /> {i.club}</span>
                    <span className="mercato-entry-meta"><MapPin size={14} strokeWidth={2} aria-hidden /> {i.location} <Calendar size={14} strokeWidth={2} aria-hidden /> {i.date}</span>
                  </div>
                  <div className="mercato-entry-row3">
                    <span className="mercato-entry-tag mercato-tag-grey">{i.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
