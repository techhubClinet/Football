import { Home, Target, Clock, TrendingUp, Check, DollarSign, Calendar, AlertCircle } from '../components/Icons';
import './NeedsExchange.css';

const stats = [
  { label: 'Besoins actifs', value: '4', icon: Home },
  { label: 'Matches détectés', value: '4', icon: Target, highlight: 'green' },
  { label: 'Urgents', value: '2', icon: Clock, highlight: 'red' },
  { label: 'Taux de match', value: '73%', icon: TrendingUp, highlight: 'purple' },
];

const needs = [
  { club: 'Lorient FC', league: 'Ligue 1', role: 'Milieu défensif (6)', description: 'Recherche un milieu défensif récupérateur avec expérience Ligue 1 ou Ligue 2', salary: '800K - 1.5M€', added: '28/02/2026', deadline: '15/03/2026', urgent: true, matchCount: 2, logo: 'https://picsum.photos/seed/lorient/80/80' },
  { club: 'FC Nantes', league: 'Ligue 1', role: 'Attaquant', description: "Besoin urgent d'un finisseur suite au départ de Mostafa Mohamed", salary: '2M - 4M€', added: '25/02/2026', deadline: '10/03/2026', urgent: true, matchCount: 1, logo: 'https://picsum.photos/seed/nantes/80/80' },
  { club: 'KAA Gent', league: 'Pro League', role: 'Défenseur central', description: 'Recherche un défenseur central pour remplacer le titulaire blessé', salary: '1M - 2M€', added: '20/02/2026', deadline: '25/03/2026', urgent: false, urgencyLabel: 'Modéré', matchCount: 1, logo: 'https://picsum.photos/seed/gent/80/80' },
];

export default function NeedsExchange() {
  return (
    <div className="needs-exchange-page">
      <header className="needs-header">
        <h1>Bourse aux Besoins</h1>
        <p className="needs-subtitle">Matching intelligent entre besoins clubs et votre portefeuille</p>
      </header>

      <div className="needs-stats">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
          <div key={s.label} className={`needs-stat-card ${s.highlight ? `needs-stat-${s.highlight}` : ''}`}>
            <span className="needs-stat-icon">{Icon && <Icon size={18} strokeWidth={2} aria-hidden />}</span>
            <span className="needs-stat-label">{s.label}</span>
            <span className="needs-stat-value">{s.value}</span>
          </div>
          );
        })}
      </div>

      <div className="needs-list">
        {needs.map((n) => (
          <div key={n.club + n.role} className={`needs-card ${n.urgent ? 'needs-card--urgent' : n.urgencyLabel ? 'needs-card--moderate' : ''}`}>
            <div className="needs-card-header">
              {n.logo ? (
                <img src={n.logo} alt="" className="needs-club-avatar" />
              ) : (
                <div className="needs-club-avatar" />
              )}
              <div className="needs-card-header-text">
                <span className="needs-club-name">{n.club}</span>
                <span className="needs-club-league">{n.league}</span>
              </div>
              {n.urgent && <span className="needs-card-urgent">Urgent</span>}
              {n.urgencyLabel && !n.urgent && <span className="needs-card-moderate">{n.urgencyLabel}</span>}
            </div>
            <div className="needs-role-block">
              <span className="needs-role-icon-wrap">
                <Target size={16} strokeWidth={2} aria-hidden />
              </span>
              <div className="needs-role-title-wrap">
                <div className="needs-role-title">{n.role}</div>
              </div>
              <div className="needs-role-description-wrap">
                <p className="needs-description">{n.description}</p>
              </div>
            </div>
            <div className="needs-details">
              <span className="needs-detail-item needs-salary">
                <DollarSign size={16} strokeWidth={2} aria-hidden />
                {n.salary}
              </span>
              <span className="needs-detail-item needs-added">
                <Calendar size={16} strokeWidth={2} aria-hidden />
                Ajouté le {n.added}
              </span>
              <span className="needs-detail-item needs-deadline">
                <AlertCircle size={16} strokeWidth={2} aria-hidden />
                Deadline: {n.deadline}
              </span>
            </div>
            <div className="needs-match-tag">
              <Check size={16} strokeWidth={2.5} aria-hidden />
              <span>{n.matchCount} joueur{n.matchCount > 1 ? 's' : ''} de votre portefeuille correspond{n.matchCount > 1 ? 'ent' : ''}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
