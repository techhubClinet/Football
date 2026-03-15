import { useState } from 'react';
import { FileText, Clock, Check, Calendar, Phone, UsersRound, FileSignature, Search, Trash2, Download } from '../components/Icons';
import { Send } from 'lucide-react';
import './Timesheet.css';

const stats = [
  { label: 'Total Actions', value: '5', icon: FileText },
  { label: 'En Cours', value: '1', icon: Clock, highlight: 'orange' },
  { label: 'Terminées', value: '4', icon: Check, highlight: 'green' },
  { label: 'Cette Semaine', value: '12', icon: Calendar, highlight: 'purple' },
];

const activities = [
  { type: 'Appel', icon: Phone, typeColor: 'blue', status: 'Terminé', statusType: 'green', description: 'Appel avec le DS du RB Leipzig concernant la situation contractuelle', date: '5 mars 2026', time: '14:30', duration: '45 min', players: ['Karim Benzema Jr.'] },
  { type: 'Réunion', icon: UsersRound, typeColor: 'purple', status: 'Terminé', statusType: 'green', description: 'Réunion stratégique avec l\'avocat pour révision des clauses', date: '4 mars 2026', time: '10:00', duration: '2h 15min', players: ['Karim Benzema Jr.', 'Marcus Silva'] },
  { type: 'Négociation', icon: FileSignature, typeColor: 'orange', status: 'En cours', statusType: 'orange', description: 'Négociation des termes du contrat avec le FC Barcelona', date: '6 mars 2026', time: '09:00', duration: '-', players: [] },
  { type: 'Scouting', icon: Search, typeColor: 'green', status: 'Terminé', statusType: 'green', description: 'Visite terrain au centre d\'entraînement pour évaluation physique', date: '2 mars 2026', time: '09:00', duration: '3h', players: ['Ahmed Al-Rashid'] },
  { type: 'Voyage', icon: Send, typeColor: 'red', status: 'Terminé', statusType: 'green', description: 'Déplacement à Munich pour rencontrer les dirigeants du Bayern', date: '1 mars 2026', time: '06:00', duration: '1 jour', players: ['Marcus Silva', 'Luca Rossi'] },
];

const activityTypes = ['Appel', 'Réunion', 'Négociation', 'Scouting', 'Voyage'];
const statusTypes = ['Terminé', 'En cours'];

export default function Timesheet() {
  const [category, setCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = activities.filter((a) => {
    const matchCategory = category === 'all' || a.type === category;
    const matchStatus = statusFilter === 'all' || a.status === statusFilter;
    const matchSearch = !searchQuery.trim() || a.description.toLowerCase().includes(searchQuery.trim().toLowerCase()) || a.players.some((p) => p.toLowerCase().includes(searchQuery.trim().toLowerCase()));
    return matchCategory && matchStatus && matchSearch;
  });

  return (
    <div className="timesheet-page">
      <header className="timesheet-header">
        <div>
          <h1>Feuille de Temps</h1>
          <p className="timesheet-subtitle">Documentez votre travail quotidien pour une transparence totale</p>
        </div>
        <div className="timesheet-header-actions">
          <button type="button" className="btn-export"><Download size={16} strokeWidth={2} aria-hidden /> Exporter en PDF</button>
          <button type="button" className="btn-new-action">+ Nouvelle Action</button>
        </div>
      </header>

      <div className="timesheet-stats">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
          <div key={s.label} className={`timesheet-stat-card ${s.highlight ? `timesheet-stat-${s.highlight}` : ''}`}>
            <span className="timesheet-stat-icon">{Icon && <Icon size={18} strokeWidth={2} aria-hidden />}</span>
            <span className="timesheet-stat-label">{s.label}</span>
            <span className="timesheet-stat-value">{s.value}</span>
          </div>
          );
        })}
      </div>

      <div className="timesheet-toolbar">
        <div className="search-wrap">
          <span className="search-icon"><Search size={18} strokeWidth={2} aria-hidden /></span>
          <input
          type="search"
          placeholder="Rechercher par description ou joueur..."
          className="toolbar-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <select className="timesheet-filter" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Toutes catégories</option>
          {activityTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select className="timesheet-filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">Tous statuts</option>
          {statusTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <section className="timesheet-journal">
        <h2 className="timesheet-journal-title">
          <Clock size={18} strokeWidth={2} aria-hidden className="timesheet-journal-title-icon" />
          Journal d'Activités
        </h2>
        <div className="timesheet-timeline">
          {filteredActivities.map((a, i) => {
            const ActivityIcon = a.icon;
            return (
            <div key={i} className={`timesheet-activity ${i === 0 ? 'timesheet-activity-first' : ''}`}>
              <div className="timesheet-activity-line" />
              <div className={`timesheet-activity-icon timesheet-activity-icon-${a.typeColor}`}>{ActivityIcon && <ActivityIcon size={20} strokeWidth={2} aria-hidden />}</div>
              <div className="timesheet-activity-card">
                <div className="timesheet-activity-header">
                  <span className={`timesheet-activity-type timesheet-activity-type-${a.typeColor}`}>{a.type}</span>
                  <span className={`timesheet-activity-status timesheet-status-${a.statusType}`}>{a.status === 'Terminé' ? <><Check size={12} strokeWidth={2.5} aria-hidden /> {a.status}</> : <><Clock size={12} strokeWidth={2} aria-hidden /> {a.status}</>}</span>
                </div>
                <p className="timesheet-activity-desc">{a.description}</p>
                <div className="timesheet-activity-meta">
                  <span><Calendar size={14} strokeWidth={2} aria-hidden className="timesheet-meta-icon" /> {a.date}</span>
                  <span><Clock size={14} strokeWidth={2} aria-hidden className="timesheet-meta-icon" /> {a.time}</span>
                  {a.duration !== '-' && <span>{a.duration}</span>}
                </div>
                {a.players.length > 0 && (
                  <div className="timesheet-activity-players">
                    <UsersRound size={14} strokeWidth={2} aria-hidden className="timesheet-players-icon" />
                    Joueurs concernés: {a.players.join(', ')}
                  </div>
                )}
                <button type="button" className="timesheet-activity-delete" aria-label="Supprimer"><Trash2 size={18} strokeWidth={2} aria-hidden /></button>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <a href="#new" className="timesheet-fab" aria-label="Nouvelle action">+</a>
    </div>
  );
}
